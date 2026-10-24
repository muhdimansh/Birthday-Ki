// Gift celebration particles. Automatically disabled for reduced-motion preferences.
function confetti(n=38){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;for(let i=0;i<n;i++){let d=document.createElement('i');d.className='confetti';d.style.setProperty('--x',((i*73+9)%100)+'%');d.style.setProperty('--dx',((i*37)%180-90)+'px');d.style.setProperty('--t',(2.8+(i%7)*.29)+'s');d.style.setProperty('--c',['#ebc78a','#b6d9c7','#ebaeb6','#a8bada'][i%4]);document.body.appendChild(d);setTimeout(()=>d.remove(),5300)}}

// Short nonblocking, skippable establishing shot; the player keeps full control.
let _cinematicTimer=null;
function cinematicBeat(chapter,zone){
 const el=document.getElementById('cinematicTitle');
 if(!el)return;
 const places=chapters[chapter]?.places||[];
 const captions=[
  ['Cahaya petang di laman kecil','Air mengalir di bawah jambatan','Pondok di atas bukit'],
  ['Hujan mula mengetuk tingkap','Rakaman lama masih tersimpan','Akhirnya bilik jadi sunyi'],
  ['Ada surat di celah buku','Lampu kecil di meja kayu','Hampir sampai ke penghujung']
 ];
 const label=captions[chapter]?.[zone]||places[zone]||'';
 clearTimeout(_cinematicTimer);
 el.innerHTML=`<span>Bab ${chapter+1} · ${chapters[chapter].name}</span><strong>${label}</strong>`;
 el.classList.remove('show');void el.offsetWidth;el.classList.add('show');
 if(world.flyby)world.flyby();
 _cinematicTimer=setTimeout(()=>el.classList.remove('show'),4200);
}
