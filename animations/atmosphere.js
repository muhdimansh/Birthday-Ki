// Atmosphere follows the three connected places, without downloading extra assets.
let _ambientChapter=-1;
function setAtmosphere(chapter){
 const el=document.getElementById('ambient');
 if(!el || chapter===_ambientChapter)return;
 _ambientChapter=chapter;el.innerHTML='';
 const kinds=['firefly','raindrop','dustmote'];
 const kind=kinds[chapter]||'dustmote';
 const count=[21,35,24][chapter]||20;
 for(let i=0;i<count;i++){
  const node=document.createElement('i');node.className='mote '+kind;
  node.style.setProperty('--left',((i*139+31)%96+2)+'%');
  node.style.setProperty('--top',((i*71+9)%75+8)+'%');
  node.style.setProperty('--delay',((i*13)%23)/7+'s');
  node.style.setProperty('--duration',(3+(i%9)*.6)+'s');
  node.style.setProperty('--size',(i%4+2)+'px');
  el.appendChild(node);
 }
 el.dataset.mood=kind;
}
