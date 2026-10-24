// Lightweight illustrated-scene controller for mobile browsers.
// The original WebGL renderer remains in this project as optional source code,
// but the illustrated edition uses real art assets rather than GPU geometry.
const world = {
  available: false,
  setChapter(chapter){ this.chapter=chapter; },
  setZone(zone){ this.zone=zone; },
  flyby(){
    const art=document.getElementById('sceneArt');
    if(!art || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    art.classList.remove('artFlyby'); void art.offsetWidth; art.classList.add('artFlyby');
    setTimeout(()=>art.classList.remove('artFlyby'),2600);
  },
  project(){return {x:innerWidth*.57,y:innerHeight*.37,visible:true}}
};
