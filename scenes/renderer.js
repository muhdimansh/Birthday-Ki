// Illustrated fallback for browsers without WebGL. The rest of the game works identically.
function artFor(ch,zone=0){
 const defs=`<defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="${['#708d88','#263c5b','#273347'][ch]}"/><stop offset="1" stop-color="${['#d2cba3','#526278','#5f4a4d'][ch]}"/></linearGradient><linearGradient id="ground" x2="0" y2="1"><stop stop-color="${['#739a80','#7c6079','#9f7d5d'][ch]}"/><stop offset="1" stop-color="${['#29483e','#292c49','#362d35'][ch]}"/></linearGradient><radialGradient id="glow2"><stop stop-color="#ffedc3" stop-opacity=".75"/><stop offset="1" stop-color="#e0b79c" stop-opacity="0"/></radialGradient><linearGradient id="glass" x2="0" y2="1"><stop stop-color="#344e71"/><stop offset="1" stop-color="#8d8192"/></linearGradient><pattern id="wood" width="32" height="40" patternUnits="userSpaceOnUse"><rect width="32" height="40" fill="#836a59"/><path d="M0 0v40" stroke="#bc9170" stroke-opacity=".34" stroke-width="3"/></pattern></defs>`;
 let content='';
 if(ch===0){
  let trees='';for(let i=0;i<19;i++){let x=25+i*72+(i%3)*15,y=410+(i%4)*42,s=.65+(i%4)*.13;trees+=`<g transform="translate(${x} ${y}) scale(${s})"><path d="M-9 48h18V-12H-9z" fill="#6d6250"/><path d="M0 -113L-67 13H67z" fill="#527865"/><path d="M0 -79L-53 28H53z" fill="#719b78"/><path d="M0 -57L-40 43H40z" fill="#94b091"/></g>`}
  let flower='';for(let i=0;i<36;i++){let x=(i*173+29)%1190,y=520+(i*79)%220;flower+=`<circle cx="${x}" cy="${y}" r="${1+(i%3)}" fill="${['#f3dcaa','#e8b4b4','#e9e5b1'][i%3]}" opacity=".7"/>`}
  content=`<rect width="1200" height="760" fill="url(#sky)"/><circle cx="860" cy="140" r="210" fill="url(#glow2)"/><circle cx="860" cy="140" r="49" fill="#f5e1b3" opacity=".75"/><path d="M0 330Q100 218 258 290T600 255T930 291T1200 250V760H0" fill="#849f92" opacity=".6"/><path d="M0 420Q260 312 450 382T850 350T1200 370V760H0" fill="#608577"/><path d="M0 488Q160 436 330 483T740 443T1200 450V760H0" fill="url(#ground)"/>${trees}<path d="M450 760C395 667 560 638 549 560S630 447 710 407" fill="none" stroke="#a6977b" stroke-width="112" stroke-linecap="round"/><path d="M450 760C395 667 560 638 549 560S630 447 710 407" fill="none" stroke="#dfc59c" stroke-width="86" stroke-linecap="round" stroke-dasharray="7 9" opacity=".63"/><path d="M0 601Q150 560 340 601T700 603T1200 589V760H0" fill="#4a6f61" opacity=".4"/><g transform="translate(698 390)"><path d="M-76 -60L0 -105 80 -60" fill="none" stroke="#dec4a0" stroke-width="20" stroke-linecap="round"/><path d="M-75 -61L0 -112 82 -61" fill="#a57d6c"/><path d="M-60 -55v105M60 -55v105" stroke="#e6c79c" stroke-width="12"/><path d="M-94 50H98" stroke="#b58d72" stroke-width="16"/></g><g transform="translate(780 570)"><rect x="0" y="-28" width="140" height="8" rx="4" fill="#b99571"/><path d="M12 -20V30M130 -20V30" stroke="#624e49" stroke-width="8"/></g>${flower}<g transform="translate(340 493)"><path d="M0 0V-59" stroke="#74664d" stroke-width="9"/><rect x="-45" y="-89" width="89" height="39" rx="3" fill="#eee1bb"/><text x="0" y="-63" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#534a43">LANGKAH</text></g>`;
 } else if(ch===1){
  let lines='';for(let i=0;i<44;i++){let x=152+(i*37)%905,y=140+(i*23)%305;lines+=`<line x1="${x}" y1="${y}" x2="${x-9}" y2="${y+22}" stroke="#b1cce5" stroke-opacity=".35" stroke-width="1.5"/>`}
  let dials='';for(let i=0;i<5;i++){let x=430+i*84;dials+=`<g><circle cx="${x}" cy="515" r="24" fill="#283745" stroke="#b0a19c" stroke-width="5"/><circle cx="${x}" cy="515" r="8" fill="#edcca2"/><path d="M${x} 493v-9" stroke="#e2b98c" stroke-width="4"/></g>`}
  content=`<rect width="1200" height="760" fill="#4b485d"/><rect x="65" y="42" width="1070" height="570" rx="22" fill="#706679"/><rect x="110" y="72" width="980" height="395" rx="15" fill="#d0b6a7"/><rect x="130" y="91" width="940" height="355" fill="url(#glass)"/><path d="M133 340Q340 270 528 320T840 303T1070 303V447H133" fill="#354960" opacity=".7"/><path d="M133 391Q280 331 450 361T800 355T1070 367V447H133" fill="#243b4c" opacity=".8"/><rect x="585" y="91" width="13" height="355" fill="#d0b6a7"/><rect x="129" y="267" width="943" height="12" fill="#d0b6a7"/>${lines}<rect x="0" y="590" width="1200" height="170" fill="url(#wood)"/><rect x="306" y="457" width="611" height="192" rx="16" fill="#473f50" stroke="#b9a395" stroke-width="11"/><rect x="328" y="473" width="566" height="78" rx="8" fill="#172735"/><path d="M353 519L373 495 393 526 413 508 433 526 453 486 473 519 493 497 513 529 533 504 553 510 573 488 593 520 613 503 633 524 653 491 673 515 693 499 713 529 733 510 753 495 773 524 793 500 813 515 844 495" fill="none" stroke="#96c1ad" stroke-width="5"/>${dials}<rect x="340" y="568" width="535" height="61" rx="7" fill="#70677d"/><g transform="translate(950 474)"><path d="M0 -53v-85" stroke="#cfad89" stroke-width="14"/><path d="M-35 -70Q0 -128 36 -70" fill="#e5c48c"/><circle cy="-68" r="20" fill="#f4dfb4"/><circle cy="-68" r="73" fill="url(#glow2)"/></g><path d="M120 0H220V120H120M980 0h100v120h-100" fill="#9b8e9e" opacity=".55"/>`;
 } else {
  let books='';for(let s=0;s<5;s++){let x=80+s*213;books+=`<rect x="${x}" y="72" width="189" height="540" rx="9" fill="#55433e" stroke="#a78668" stroke-width="11"/>`;for(let r=0;r<4;r++){let y=134+r*118;books+=`<rect x="${x+7}" y="${y+18}" width="177" height="11" fill="#ba9471"/>`;for(let k=0;k<10;k++){let h=42+(k*7+r*5)%39;books+=`<rect x="${x+13+k*16}" y="${y+17-h}" width="12" height="${h}" rx="2" fill="${['#c39c86','#9fafa0','#d3c19c','#9d96a5','#8f6e71'][(s+r+k)%5]}"/>`}}}
  content=`<rect width="1200" height="760" fill="#584a4d"/><circle cx="640" cy="245" r="350" fill="url(#glow2)"/><rect y="599" width="1200" height="161" fill="url(#wood)"/>${books}<rect x="410" y="381" width="410" height="192" rx="13" fill="#76574b" stroke="#c09c78" stroke-width="10"/><rect x="427" y="400" width="377" height="143" rx="6" fill="#c4a783"/><path d="M447 460Q520 428 603 458L603 520Q524 494 447 522z" fill="#f4e5ca" stroke="#9e7f6c" stroke-width="4"/><path d="M606 458Q680 425 784 456V522Q677 494 606 520z" fill="#efdec0" stroke="#9e7f6c" stroke-width="4"/><path d="M603 456v67" stroke="#a98063" stroke-width="6"/><path d="M469 465q62 -20 115 0M469 484q62 -18 115 0M626 465q62 -20 137 0M626 485q62 -20 137 0" stroke="#ad9c8d" stroke-width="3" fill="none"/><rect x="486" y="560" width="15" height="141" fill="#8c6651"/><rect x="720" y="560" width="15" height="141" fill="#8c6651"/><g transform="translate(892 420)"><path d="M0 0v-186" stroke="#d2ae79" stroke-width="14"/><path d="M-76 -169Q0 -256 76 -169z" fill="#edc998"/><circle cy="-169" r="149" fill="url(#glow2)"/></g>`;
 }
 return `<svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustrasi bab ${chapters[ch].name}">${defs}${content}<rect width="1200" height="760" fill="#0c1528" opacity=".1"/></svg>`;
}
function installArt(ch){let e=document.getElementById('fallbackArt');if(e){e.innerHTML=artFor(ch);e.style.opacity='1';e.querySelector('svg').style.width='100%';e.querySelector('svg').style.height='100%'}}

// Procedural WebGL scenery: everything is built locally, with no external 3D or image dependencies.
const world=(()=>{
 const canvas=document.getElementById('gl'),gl=canvas.getContext('webgl',{alpha:true,antialias:true,powerPreference:'low-power'});let chapter=-1,zone=0,angle=.28,tilt=.48,targetAngle=.28,targetTilt=.48,eyeX=0,goalX=0,ready=false,verts=[],num=0,mvp=null,view=null,proj=null,motion=true;
 if(!gl){canvas.style.display='none';let old=-1;return{flyby(){},setChapter(n){if(n!==old){old=n;installArt(n)}},setZone(){},project(){return{x:innerWidth*.63,y:innerHeight*.4,visible:true}},available:false}};
 const vs=`attribute vec3 aPos;attribute vec3 aColor;uniform mat4 uView;uniform mat4 uProj;varying vec3 vCol;varying float vDist;void main(){vec4 p=uView*vec4(aPos,1.0);vDist=length(p.xyz);vCol=aColor;gl_Position=uProj*p;}`;
 const fs=`precision mediump float;uniform vec3 uFog;varying vec3 vCol;varying float vDist;void main(){float fog=smoothstep(11.0,34.0,vDist);vec3 haze=mix(vCol,uFog,fog*.57);vec3 col=pow(max(haze,vec3(.0)),vec3(.91));gl_FragColor=vec4(col,1.);}`;
 function shader(type,source){let s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s}
 const program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,vs));gl.attachShader(program,shader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));gl.useProgram(program);
 const pos=gl.getAttribLocation(program,'aPos'),color=gl.getAttribLocation(program,'aColor'),uView=gl.getUniformLocation(program,'uView'),uProj=gl.getUniformLocation(program,'uProj'),uFog=gl.getUniformLocation(program,'uFog');const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,3,gl.FLOAT,false,24,0);gl.enableVertexAttribArray(color);gl.vertexAttribPointer(color,3,gl.FLOAT,false,24,12);gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);/* Draw both sides of lightweight procedural panels for visibility. */
 function rgb(hex,shade=1){let n=parseInt(hex.replace('#',''),16);return[((n>>16)&255)/255*shade,((n>>8)&255)/255*shade,(n&255)/255*shade]}
 function tri(a,b,c,cl){for(let v of [a,b,c])verts.push(...v,...cl)}
 function quad(a,b,c,d,cl){tri(a,b,c,cl);tri(a,c,d,cl)}
 function cube(x,y,z,w,h,d,col){let a=x-w/2,b=x+w/2,c=y-h/2,e=y+h/2,f=z-d/2,g=z+d/2;quad([b,c,g],[a,c,g],[a,e,g],[b,e,g],rgb(col,.86));quad([a,c,f],[b,c,f],[b,e,f],[a,e,f],rgb(col,.58));quad([a,c,g],[a,c,f],[a,e,f],[a,e,g],rgb(col,.72));quad([b,c,f],[b,c,g],[b,e,g],[b,e,f],rgb(col,.79));quad([a,e,g],[a,e,f],[b,e,f],[b,e,g],rgb(col,1));quad([a,c,f],[a,c,g],[b,c,g],[b,c,f],rgb(col,.46))}
 function column(x,y,z,r,h,col,faces=9){let y0=y-h/2,y1=y+h/2;for(let i=0;i<faces;i++){let a=i*Math.PI*2/faces,b=(i+1)*Math.PI*2/faces;let p=[x+r*Math.cos(a),y0,z+r*Math.sin(a)],q=[x+r*Math.cos(b),y0,z+r*Math.sin(b)],p2=[p[0],y1,p[2]],q2=[q[0],y1,q[2]];quad(q,p,p2,q2,rgb(col,.65+.3*Math.max(0,Math.sin(a+1))));tri([x,y1,z],q2,p2,rgb(col,1))}}
 function cone(x,y,z,r,h,col,faces=9){let bottom=y-h/2;for(let i=0;i<faces;i++){let a=i*Math.PI*2/faces,b=(i+1)*Math.PI*2/faces;tri([x+r*Math.cos(a),bottom,z+r*Math.sin(a)],[x+r*Math.cos(b),bottom,z+r*Math.sin(b)],[x,bottom+h,z],rgb(col,.58+.4*Math.max(0,Math.sin(a+1))))}}
 function plant(x,z,s=1,variant=0){column(x,.55*s,z,.12*s,1.1*s,'#80694f');if(variant%3===0){cone(x,1.57*s,z,.79*s,2*s,'#557f69');cone(x,2.0*s,z,.63*s,1.3*s,'#85a88a')}else{cone(x,1.47*s,z,.73*s,1.6*s,'#738f6b');cone(x,1.91*s,z,.54*s,1.27*s,'#aec19a')}}
 function lamp(x,z){column(x,.75,z,.08,1.5,'#625a55');cube(x,1.57,z,.36,.36,.36,'#ffdc96');cone(x,1.82,z,.32,.25,'#634f47')}
 function arch(x,z,w=3){for(let o of [-1,1])column(x+o*w/2,1,z,.15,2,'#b99775');cube(x,2.18,z,w+.45,.27,.46,'#8b6253');cone(x,2.5,z,1,.7,'#d9bb97')}
 function bench(x,z){cube(x,.53,z,1.4,.18,.6,'#9b7054');for(let d of [-.49,.49])cube(x+d,.24,z,.13,.53,.13,'#55473b');cube(x,.85,z+.24,1.4,.48,.13,'#9b7054')}
 function bookShelf(x,z){cube(x,1.5,z,2.1,2.8,.7,'#655046');for(let y of [.63,1.35,2.07]){cube(x,y,z+.4,2,.12,.81,'#ac8764');for(let i=0;i<11;i++){let h=.35+.2*((i*7+Math.floor(x*3))%3);cube(x-.86+i*.17,y+.14+h/2,z+.47,.115,h,.25,['#c79076','#a6b8a4','#e1c794','#8b8fa7','#d3a8a2'][i%5])}}}
 function furniture(x,z){cube(x,.75,z,2.1,.22,1.1,'#a8866b');for(let dx of [-.87,.87])for(let dz of [-.37,.37])cube(x+dx,.37,z+dz,.12,.72,.12,'#6a5045')}

 // Lightweight decorative geometry for richer diorama scenes.
 function prismRoof(x,y,z,w,d,roofColor){
  const ridge=y+.68, e=y-.12;
  for(let side of [-1,1]){const zz=z+side*d/2;
   quad([x-w/2,e,zz],[x+w/2,e,zz],[x+w/2,ridge,z],[x-w/2,ridge,z],rgb(roofColor,side===1?.9:.72));}
 }
 function flower(x,z,col='#e7bcab',scale=1){
  column(x,.14*scale,z,.023*scale,.28*scale,'#6a9c71',6);
  for(let j=0;j<5;j++){let a=j*Math.PI*2/5;
   cube(x+Math.cos(a)*.07*scale,.31*scale,z+Math.sin(a)*.07*scale,.085*scale,.045*scale,.07*scale,col)}
  cube(x,.32*scale,z,.06*scale,.045*scale,.05*scale,'#f5d89e');
 }
 function planters(x,z){cube(x,.18,z,.58,.36,.53,'#a17b60');for(let t=0;t<5;t++)flower(x+(t%3-1)*.14,z+(Math.floor(t/3)-.5)*.22,['#f3c0bb','#f0df9e','#c8c1e1'][t%3],.9)}
 function lanternChain(x,z){
  for(let i=0;i<5;i++){
   let xx=x+(i-2)*.5;column(xx,1.28,z,.028,1.45,'#d6b68a',5);
   cube(xx,1.97,z,.23,.29,.21,'#f5dfab');cube(xx,2.14,z,.32,.08,.3,'#755f58');
  }
 }
 function stoneSteps(x,z){for(let i=0;i<6;i++){let xx=x+(i%3-1)*.58,zz=z+Math.floor(i/3)*.65;
  cube(xx,.07,zz,.46,.1,.34,i%2?'#d6c5a5':'#b5aa97')}}
 function woodenGate(x,z){
  for(let d of [-1,1]){cube(x+d*1.25,1.24,z,.23,2.45,.32,'#aa8263');cube(x+d*1.26,2.58,z,.4,.28,.36,'#d3b38c')}
  cube(x,2.64,z,2.95,.23,.35,'#8e6352');prismRoof(x,2.94,z,3.15,.87,'#bd987b');
 }
 function windowLight(x,z){
  cube(x,1.7,z,1.9,2.05,.15,'#c6ad8c');cube(x,1.7,z+.095,1.65,1.8,.09,'#527d85');
  cube(x,1.7,z+.17,.09,1.9,.1,'#f3dab5');cube(x,1.7,z+.18,1.72,.08,.1,'#f3dab5');
 }
 function recordPlayer(x,z){
  cube(x,.98,z,1.65,.28,.9,'#786175');column(x,1.16,z,.42,.08,'#293c4b',24);
  column(x,1.2,z,.18,.1,'#c9b9a2',20);cube(x+.48,1.14,z-.19,.08,.1,.5,'#d2c4ae');
 }
 function radioDetails(x,z){
  cube(x,.85,z,1.72,1.12,.46,'#996f6b');cube(x-.34,.89,z+.28,.72,.68,.02,'#483f56');
  cube(x+.45,.98,z+.27,.42,.2,.04,'#e8d7b3');for(let i=0;i<3;i++)column(x+.18+i*.24,.59,z+.31,.065,.12,'#dec59e',10);
  column(x+.63,1.71,z-.17,.021,.92,'#b0a2a0',6)
 }
 function vinylStacks(x,z){for(let i=0;i<5;i++)cube(x+i*.18,.6,z,.085,.71,.67,['#8d717a','#afaa8f','#6e7b92','#9b858f','#a7a080'][i])}
 function studioMic(x,z){
  column(x,1.26,z,.055,2.4,'#a9b3bb');column(x,2.55,z,.19,.4,'#343d4d');
  cube(x,2.48,z+.18,.17,.28,.16,'#b2b6b9');
 }
 function bookPile(x,z){for(let i=0;i<5;i++){const widths=[.95,1.05,.8,1.2,.87];cube(x+(i%2)*.035,.84+i*.1,z,widths[i],.12,.72,['#e1c293','#9cb7a9','#b58e88','#b5a9ba','#d8ba86'][i]);}}
 function hangingGlobe(x,z){
  column(x,1.05,z,.085,1.7,'#b99878');column(x,1.89,z,.58,.02,'#b69b83',18);
  column(x,2.25,z,.44,.6,'#92ad9b',18);column(x,2.54,z,.1,.06,'#d9bb91',9);
 }
 function libraryReadingCorner(x,z){
  cube(x,.43,z,1.2,.55,.82,'#927261');cube(x,.93,z-.34,1.2,.83,.13,'#9b7f6c');
  cube(x-.48,.72,z,.16,.49,.83,'#d1b49a');cube(x+.48,.72,z,.16,.49,.83,'#d1b49a');
 }
 function objectMarker(x,z,chapter,variant){
   // Four distinct small artefacts on this plinth; the glowing artifact indicates the current challenge.
   column(x,.28,z,.29,.55,chapter===0?'#b79d7e':chapter===1?'#8a7a93':'#ab8266');
   if(chapter===0){if(variant%2)cone(x,.96,z,.38,.55,'#cbb59d');else cube(x,.95,z,.58,.38,.44,'#e2c28e')}
   else if(chapter===1){if(variant%2)column(x,.9,z,.35,.1,'#c2b6bd',17);else cube(x,.9,z,.62,.29,.4,'#8aaeb4')}
   else {cube(x,.85,z,.52,.44,.43,['#ceb58e','#b1c19d','#d5ad9a','#ad9fca'][variant%4]);cube(x,.91,z+.25,.42,.13,.05,'#f2e5cd')}
 }

 function build(c){verts=[];let grass=c===0,room=c!==0;
 cube(0,-.18,0,24,.38,9,grass?'#5b7b68':c===1?'#655a6a':'#896f5e');cube(0,-.38,0,24,.21,9,grass?'#415d54':'#554652');
 if(grass){for(let i=0;i<29;i++){let x=-11.5+i*.8;cube(x,.03,1.4+(i%2)*.13,.47,.08,.46,'#c5b39a');}for(let i=0;i<15;i++){let x=-11+(i*11%22),z=-3.6+((i*13)%7);if(Math.abs(z-1.4)>1.1)plant(x,z,.65+(i%4)*.11,i)}for(let i=0;i<9;i++)lamp(-10+i*2.5,2.32)}
 else {cube(0,1.7,-4.42,24,3.75,.35,c===1?'#6b667a':'#6d5c55');cube(-12,1.6,0,.38,3.6,9,c===1?'#6b667a':'#6d5c55');cube(12,1.6,0,.38,3.6,9,'#6a5f61');for(let i=0;i<26;i++){cube(-11.5+i*.88,-.01,0,.045,.015,8.7,c===1?'#846e79':'#9f8270')}
 // windows: dark glass panes with glowing borders
 for(let x of [-8.2,0,8.2]){cube(x,1.95,-4.13,2.9,2.25,.1,'#bbaa9d');cube(x,1.95,-4.04,2.58,1.95,.07,c===1?'#37546a':'#324752');cube(x,1.95,-3.99,.075,2.04,.09,'#c1b6a1');cube(x,1.94,-3.98,2.64,.08,.09,'#c1b6a1')}}
 for(let area=0;area<3;area++){let x=-7+7*area;
 cube(x,-.01,.7,5.6,.07,5.7,grass?['#5e8367','#7d8b72','#758766'][area]:c===1?['#746e77','#726073','#655e72'][area]:['#89705d','#88665c','#967a5d'][area]);
 if(c===0){if(area===0){arch(x,.4);for(let j=0;j<3;j++)plant(x-2.3+j*2.2,-2.4,.52,j);column(x,1.2,-.85,.35,2.3,'#9b8662')}
 if(area===1){for(let j=0;j<6;j++)cube(x-2+j*.72,.08,1.1,.59,.15,2.25,'#ae9071');cube(x,.04,-1.2,4.9,.12,1.25,'#567f89');for(let j=0;j<3;j++){column(x-1.8+j*1.8,.86,-2,.13,1.6,'#a78065');lamp(x-2+j*2,-2.1)}}
 if(area===2){for(let dx of [-2,2])for(let dz of [-1,1.5])column(x+dx,1.16,dz,.15,2.3,'#aa8a62');cube(x,2.36,.25,5,.24,3.2,'#b9a07c');cone(x,2.85,.25,2.8,1.3,'#9d795d');bench(x,1.5)}}
 if(c===1){if(area===0){cube(x,.85,-1.9,1.7,1.2,.65,'#765d51');cube(x,1.46,-1.52,1.24,.8,.15,'#c4b4a1');cube(x,1.58,-1.4,1.06,.62,.08,'#37464d');for(let j=0;j<3;j++)cube(x-1+j,.05,2.7,.5,.08,.48,'#f4d8ad')}
 if(area===1){furniture(x,.8);for(let j=0;j<5;j++)cube(x-1+j*.46,.95,.32,.32,.12,.48,['#ba9496','#ddc195','#9fbcb1'][j%3]);column(x+1.8,.92,-1,.13,1.84,'#a68c79');cube(x+1.8,1.9,-1,.42,.2,.4,'#f2dca2')}
 if(area===2){cube(x,1.4,-2.6,3.9,2.4,.46,'#473f57');cube(x,1.45,-2.25,2.9,1.55,.08,'#8b7b8b');for(let j=0;j<3;j++)cube(x-1+j,1.45,-2.15,.6,.98,.1,['#ab7f87','#91b8ad','#d2bb94'][j]);furniture(x,1.5)}}
 if(c===2){if(area===0){bookShelf(x-1.45,-1.5);bookShelf(x+1.2,-1.5);bench(x,1.8)}if(area===1){furniture(x,.55);column(x+.8,1.15,-.2,.06,.8,'#b59e86');cone(x+.8,1.6,-.2,.4,.5,'#f6d69a');bookShelf(x-1.9,-2.4)}if(area===2){bookShelf(x-1.7,-1.6);bookShelf(x+1.5,-1.6);furniture(x,1.4);cube(x,1.01,1.3,.78,.24,.51,'#e4c9a4');}}
 // Four puzzle artefacts share a plinth in each area; the selected one is highlighted by the DOM hotspot.
 for(let k=0;k<4;k++)objectMarker(x-1.28+k*.85,2.6,c,k);
 if(c===0){
  stoneSteps(x-1.25,-.1);for(let m=0;m<5;m++)flower(x-2.1+m*.9,2.15,['#f3c6b1','#e8d99e','#cec6e9'][m%3],1);
  if(area===0){woodenGate(x,-3);planters(x+2,-.8);planters(x-2,.8)}
  if(area===1){lanternChain(x,-.7);planters(x+2.15,-2.1)}
  if(area===2){lanternChain(x,-2);planters(x-2,1.5);planters(x+2,1.5)}
 } else if(c===1){
  if(area===0){radioDetails(x,-.45);vinylStacks(x+2,-1.1)}
  if(area===1){recordPlayer(x,1.5);studioMic(x-1.5,0);vinylStacks(x+1.8,-2)}
  if(area===2){studioMic(x,.2);recordPlayer(x,-1.8)}
 } else {
  if(area===0){bookPile(x,1.4);libraryReadingCorner(x+1.25,-.6)}
  if(area===1){hangingGlobe(x+1.65,.8);bookPile(x-.6,1.4)}
  if(area===2){bookPile(x-1.2,-1.2);hangingGlobe(x+1.6,-.8)}
 }
 }
 const data=new Float32Array(verts);num=data.length/6;gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);gl.vertexAttribPointer(pos,3,gl.FLOAT,false,24,0);gl.vertexAttribPointer(color,3,gl.FLOAT,false,24,12);
 }
 const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],sub=(a,b)=>a.map((n,i)=>n-b[i]),norm=a=>{let l=Math.hypot(...a);return a.map(n=>n/l)};
 function look(eye,center,up=[0,1,0]){let z=norm(sub(eye,center)),x=norm(cross(up,z)),y=cross(z,x);return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-(x[0]*eye[0]+x[1]*eye[1]+x[2]*eye[2]),-(y[0]*eye[0]+y[1]*eye[1]+y[2]*eye[2]),-(z[0]*eye[0]+z[1]*eye[1]+z[2]*eye[2]),1])}
 function perspective(fov,aspect,near,far){let f=1/Math.tan(fov/2),a=1/(near-far);return new Float32Array([f/aspect,0,0,0,0,f,0,0,0,0,(far+near)*a,-1,0,0,2*far*near*a,0])}
 function times(m,v){return[m[0]*v[0]+m[4]*v[1]+m[8]*v[2]+m[12]*v[3],m[1]*v[0]+m[5]*v[1]+m[9]*v[2]+m[13]*v[3],m[2]*v[0]+m[6]*v[1]+m[10]*v[2]+m[14]*v[3],m[3]*v[0]+m[7]*v[1]+m[11]*v[2]+m[15]*v[3]]}
 function project(x,y,z){if(!view||!proj)return{x:innerWidth/2,y:innerHeight/2,visible:true};let v=times(proj,times(view,[x,y,z,1]));let px=(1+v[0]/v[3])*.5*innerWidth,py=(1-v[1]/v[3])*.5*innerHeight;return{x:px,y:py,visible:v[3]>0&&px>-60&&px<innerWidth+60&&py>-50&&py<innerHeight+40}}
 function frame(){if(!motion)return;let w=window.innerWidth,h=window.innerHeight,dpr=Math.min(window.devicePixelRatio||1,1.6);if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);gl.viewport(0,0,canvas.width,canvas.height)}eyeX+=(goalX-eyeX)*.045;angle+=(targetAngle-angle)*.09;tilt+=(targetTilt-tilt)*.09;let radius=w<650?12.4:13.6,eye=[eyeX+radius*Math.sin(angle),7.2+radius*(tilt-.48)*.6,7+radius*Math.cos(angle)];let center=[eyeX,.75,0];view=look(eye,center);proj=perspective(Math.PI/3.2,w/h,.1,90);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(program);gl.uniformMatrix4fv(uView,false,view);gl.uniformMatrix4fv(uProj,false,proj);let fog=chapter===0?[.27,.35,.34]:chapter===1?[.23,.27,.36]:[.3,.26,.24];gl.uniform3fv(uFog,new Float32Array(fog));gl.drawArrays(gl.TRIANGLES,0,num);for(let hotspot of document.querySelectorAll('.hotspot')){
   let x=-7+7*zone+Number(hotspot.dataset.offset||0);
   let y=Number(hotspot.dataset.height||1.35);
   let z=Number(hotspot.dataset.depth||2.8);
   let p=project(x,y,z);
   hotspot.style.left=p.x+'px';hotspot.style.top=p.y+'px';
   hotspot.style.display=p.visible?'':'none';
  }requestAnimationFrame(frame)}
 let down=null;canvas.addEventListener('pointerdown',e=>{down={x:e.clientX,y:e.clientY,a:targetAngle,t:targetTilt};canvas.setPointerCapture(e.pointerId)});canvas.addEventListener('pointermove',e=>{if(!down)return;targetAngle=Math.max(-.85,Math.min(.85,down.a-(e.clientX-down.x)/360));targetTilt=Math.max(.2,Math.min(.9,down.t+(e.clientY-down.y)/530))});canvas.addEventListener('pointerup',()=>down=null);canvas.addEventListener('pointercancel',()=>down=null);
 build(0);ready=true;requestAnimationFrame(frame);
 function flyby(){
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  let from=targetAngle;targetAngle=-.42;
  setTimeout(()=>{targetAngle=.46},720);
  setTimeout(()=>{targetAngle=from},2300);
 }
 return{available:true,flyby,setChapter(n){if(chapter!==n){chapter=n;build(n);document.getElementById('world').style.background=['linear-gradient(#6e8a7d,#405e5e 53%,#1c3634)','linear-gradient(#35445e,#303c52 48%,#1a2234)','linear-gradient(#4b4951,#3a343c 55%,#241e23)'][n]}},setZone(n){zone=n;goalX=-7+7*n;targetAngle=.28},project};
})();
