// Original soundtrack and effects produced for Tiga Bab, Satu Takdir.
// All media is local and can be served by static hosting; audio starts ONLY on a user gesture.
const soundtrack = (() => {
  const assets = key => (window.KI_AUDIO_EMBEDDED && window.KI_AUDIO_EMBEDDED[key]) || ('audio/' + key + '.m4a');
  const storeKey = 'ki-tiga-bab-audio-settings-v1';
  let settings = {music:.48, effects:.66, ambient:.33, ambience:true};
  try {const old=JSON.parse(localStorage.getItem(storeKey)||'null'); if(old && typeof old==='object') settings={...settings,...old};}catch(_e){}
  const titles=['Langkah · Laman petang','Melodi · Hujan di tingkap','Damai · Perpustakaan malam','Surat hari jadi · Penutup'];
  const music=['music_langkah','music_melodi','music_damai','music_finale'];
  const ambient=['ambient_garden','ambient_rain','ambient_library','ambient_library'];
  let enabled=false, scene=-1, liveMusic=null, liveAmbient=null, fadeTimer=null;
  let soundStatus='Sentuh Hidupkan Audio untuk mula.';
  const media = new Map();
  const activeSfx=new Set();
  function getMedia(key){
    if(!media.has(key)) {const a=new Audio(assets(key));a.loop=true;a.preload='none';a.setAttribute('playsinline','');media.set(key,a);}
    return media.get(key);
  }
  const clamp=v=>Math.max(0,Math.min(1,Number(v)||0));
  const save=()=>{try{localStorage.setItem(storeKey,JSON.stringify(settings))}catch(_e){}};
  function setStatus(value){soundStatus=value;const label=document.getElementById('audioStatus');if(label) label.textContent=value;}
  function stopFade(){if(fadeTimer!==null){clearInterval(fadeTimer);fadeTimer=null;}}
  function play(a){
    try{
      const task=a.play();
      if(task && task.catch)task.catch(()=>setStatus('Audio tak dapat dimainkan. Cuba hidupkan semula melalui butang ♪, atau semak mod senyap/peranti.'));
    }catch(_e){setStatus('Pelayar menyekat bunyi. Ketuk butang Hidupkan Audio semula.');}
  }
  function fadeTo(musicKey,ambientKey){
    stopFade();
    const targetMusic=getMedia(musicKey),targetAmb=getMedia(ambientKey);
    const prevMusic=liveMusic,prevAmb=liveAmbient;
    if(prevMusic===targetMusic && prevAmb===targetAmb) {applyVolume();return;}
    const changeMusic=prevMusic!==targetMusic,changeAmb=prevAmb!==targetAmb;
    const old=[...new Set([prevMusic,prevAmb].filter(Boolean))];
    if(changeMusic){targetMusic.volume=0;play(targetMusic);liveMusic=targetMusic;}
    if(changeAmb){targetAmb.volume=0; if(settings.ambience)play(targetAmb);liveAmbient=targetAmb;}
    const start=Date.now(), dur=1750;
    const from=old.map(a=>[a,a.volume]);
    const tick=()=>{
      let pct=Math.min(1,(Date.now()-start)/dur);
      for(const [a,v] of from){if(a!==liveMusic && a!==liveAmbient) a.volume=Math.max(0,v*(1-pct));}
      if(liveMusic)liveMusic.volume=clamp(settings.music)*pct;
      if(liveAmbient)liveAmbient.volume=settings.ambience?clamp(settings.ambient)*pct:0;
      if(pct>=1){stopFade();for(const [a] of from)if(a!==liveMusic && a!==liveAmbient){a.pause();a.currentTime=0;}}
    };
    fadeTimer=setInterval(tick,70);tick();
  }
  function applyVolume(){if(liveMusic)liveMusic.volume=enabled?clamp(settings.music):0;if(liveAmbient)liveAmbient.volume=enabled&&settings.ambience?clamp(settings.ambient):0;}
  function setScene(chapter,phase){
    const desired=phase==='final'?3:Math.max(0,Math.min(2,chapter|0));
    if(scene===desired)return;
    scene=desired;
    if(enabled){fadeTo(music[desired],ambient[desired]);setStatus('Sedang dimainkan: '+titles[desired]);}
  }
  function enable(chapter,phase){
    if(enabled)return;
    enabled=true;scene=-1;
    setScene(chapter,phase);
    // Explicit user click unlocks media on iOS. No autoplay at page load.
    setStatus('Bunyi dihidupkan. '+titles[scene]+'.');
  }
  function disable(){
    enabled=false;stopFade();
    for(const a of media.values()){a.pause();a.currentTime=0;}
    for(const a of activeSfx){a.pause();}activeSfx.clear();
    liveMusic=liveAmbient=null;scene=-1;
    setStatus('Audio dimatikan.');
  }
  function toggle(chapter,phase){if(enabled)disable();else enable(chapter,phase);return enabled;}
  function setVolume(group,val){
    if(!['music','effects','ambient'].includes(group))return;
    settings[group]=clamp(val);save();stopFade();applyVolume();
  }
  function toggleAmbience(){settings.ambience=!settings.ambience;save();
    if(liveAmbient){if(settings.ambience&&enabled)play(liveAmbient);else liveAmbient.pause();}
    applyVolume();return settings.ambience;
  }
  function effect(key='choice'){
    if(!enabled||document.hidden)return;
    const a=new Audio(assets('sfx_'+key));a.preload='auto';a.volume=Math.min(.9,clamp(settings.effects)*.7);
    activeSfx.add(a);
    const cleanup=()=>activeSfx.delete(a);
    a.addEventListener('ended',cleanup,{once:true});a.addEventListener('error',cleanup,{once:true});
    play(a);
    if(activeSfx.size>12){const first=activeSfx.values().next().value;if(first&&first!==a){first.pause();activeSfx.delete(first);}}
  }
  function playRhythm(patternIndex){
    if(!enabled)return false;
    const pulses=[[0,2],[0,1],[1,2]][Math.min(2,Math.max(0,patternIndex))]||[0,2];
    pulses.forEach(step=>setTimeout(()=>effect('knock'),step*360));return true;
  }
  function previewRadio(station){
    if(!enabled)return false;
    if(station===0){effect('static');return true;}
    if(station===2){[0,1,2].forEach(x=>setTimeout(()=>effect('chime'),x*370));return true;}
    const a=new Audio(assets('ambient_rain'));a.volume=Math.min(.5,settings.effects*.6);activeSfx.add(a);play(a);
    setTimeout(()=>{a.pause();activeSfx.delete(a);},1800);return true;
  }
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){for(const a of media.values())a.pause();for(const a of activeSfx)a.pause();}
    else if(enabled){setStatus('Audio dijeda semasa aplikasi di latar. Ketuk skrin untuk sambung bunyi.');}
  });
  document.addEventListener('pointerdown',()=>{
    if(!enabled||document.hidden)return;
    if(liveMusic&&liveMusic.paused)play(liveMusic);
    if(liveAmbient&&liveAmbient.paused&&settings.ambience)play(liveAmbient);
  },{capture:true});
  return {get enabled(){return enabled},get settings(){return {...settings}},get status(){return soundStatus},get scene(){return scene},toggle,enable,disable,setScene,setVolume,toggleAmbience,effect,playRhythm,previewRadio};
})();
// Backwards compatibility with existing puzzle audio hooks.
function emitSound(freq=520,dur=.13){soundtrack.effect(freq<350?'wrong':freq>=680?'correct':'choice');}
function fanfare(){soundtrack.effect('gift');}
