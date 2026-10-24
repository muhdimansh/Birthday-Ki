from playwright.sync_api import sync_playwright
from pathlib import Path
import re
base=Path(__file__).resolve().parents[1]
s=(base/'index.html').read_text(encoding='utf-8')
s=s.replace('<link rel="stylesheet" href="style.css">','<style>'+(base/'style.css').read_text(encoding='utf-8')+'</style>')
s=re.sub(r'<script defer src="([^"]+)"></script>', lambda m:'<script>\n'+(base/m.group(1)).read_text(encoding='utf-8')+'\n</script>',s)
js=r'''async () => {
 const click=(sel)=>{let e=document.querySelector(sel);if(!e)throw Error('Missing '+sel+' at '+game.solved);e.click()};
 const select=(sel,v)=>{let e=document.querySelector(sel);if(!e)throw Error('Missing '+sel);e.value=v;e.dispatchEvent(new Event('change',{bubbles:true}))};
 const fill=(sel,v)=>{let e=document.querySelector(sel);if(!e)throw Error('Missing '+sel);e.value=v;e.dispatchEvent(new Event('input',{bubbles:true}))};
 const logs=[];
 if(puzzles.length!==36||!puzzles.every(p=>p.hints.length===3))throw Error('Wrong puzzle or hint count');
 click('[data-act=begin]');click('[data-act=enter]');
 for(let i=0;i<36;i++){
  const p=puzzles[i],k=p.type;
  click('.bottomBar [data-act=puzzle]');
  if(!document.querySelector('.modalTitle')?.textContent.includes(p.title))throw Error('Wrong modal '+i);
  if(i===0){
   click('[data-act=check]');if(!document.querySelector('.notice.fail'))throw Error('Invalid answer allowed');
   for(let h=1;h<=3;h++){click('[data-act=hint]');if(document.querySelectorAll('.hintBox').length!==h)throw Error('Hint fail '+h)}
  }
  if(['pick','rhythm','bookcase'].includes(k))click(`[data-choose="${p.choices.indexOf(p.answer)}"]`);
  else if(k==='path')for(const cell of p.answer.split('|').slice(1))click(`[data-cell="${cell}"]`);
  else if(k==='toggle'){for(let j=0;j<p.answer.length;j++){if(p.answer[j]==='1')click(`[data-toggle="${j}"]`);}}
  else if(k==='pipes'){p.answer.split('|').forEach((v,j)=>select(`[data-pipe="${j}"]`,v));}
  else if(k==='items')for(const v of p.answer.split('|'))click(`[data-item="${p.items.findIndex(x=>x[0]===v)}"]`);
  else if(k==='sequence')for(const v of p.answer.split('|'))click(`[data-append="${p.choices.indexOf(v)}"]`);
  else if(k==='radio')fill('[data-slider="0"]',String(p.choices.indexOf(p.answer)));
  else if(k==='turnPanel')click('[data-turn="left"]');
  else if(k==='sliders')p.answer.split('|').forEach((v,j)=>fill(`[data-slider="${j}"]`,v));
  else if(k==='cell')click(`[data-cell="${p.answer}"]`);
  else if(k==='wire'){for(const r of [0,2])for(let c=0;c<3;c++){click(`[data-wire="${r},${c}"]`);if(r===2)click(`[data-wire="${r},${c}"]`);}}
  else if(k==='text')fill('#answerInput',p.answer);
  else if(k==='still'){click('[data-act=startStill]');await new Promise(resolve=>setTimeout(resolve,5300));}
  else if(k==='anglecode'){click('[data-angle="90"]');fill('#answerInput','241')}
  else if(k==='rotation')click('[data-angle="180"]');
  else if(k==='match')p.answer.split('|').forEach((v,j)=>select(`[data-match="${j}"]`,v));
  else if(k==='letters')for(const v of p.answer.split('|'))click(`[data-letter="${v}"]`);
  else if(k==='final')p.answer.split('|').forEach((v,j)=>fill(`[data-final="${j}"]`,v));
  else throw Error('unknown puzzle type '+k);
  click('[data-act=check]');
  if(!document.querySelector('.notice.ok'))throw Error('Correct answer rejected #'+(i+1)+' '+p.title+' value='+correctValue(p)+' expected='+p.answer);
  click('[data-act=advance]');
  if((i+1)%12===0){
   if(!document.querySelector('[data-act=openGift]'))throw Error('Gift unopened after '+(i+1));
   click('[data-act=openGift]');
   if(!document.querySelector('.giftBox.open'))throw Error('Gift reveal failed');
   click('[data-act=nextChapter]');
   if(i<35)click('[data-act=enter]');
  }else if((i+1)%4===0){click('[data-act=close]');}
  if((i+1)%12===0)logs.push('Bab '+(Math.floor(i/12)+1)+' completed');
 }
 if(!document.querySelector('.sectionTitle')?.textContent.includes('Selamat Hari Lahir'))throw Error('No ending');
 click('[data-act=letter]');
 if(!document.querySelector('.letter')?.textContent.includes('Happy birthday, Ki.'))throw Error('Missing birthday letter');
 return {logs,solved:game.solved,types:[...new Set(puzzles.map(p=>p.type))],hints:Object.keys(game.hints).length,ending:'Selamat Hari Lahir, Ki',ambient:document.querySelectorAll('#ambient .mote').length};
}'''
with sync_playwright() as p:
 b=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 pg=b.new_page(viewport={'width':390,'height':844},device_scale_factor=1)
 errs=[];pg.on('pageerror',lambda e:errs.append(str(e)))
 pg.goto('about:blank');pg.set_content(s,wait_until='domcontentloaded')
 result=pg.evaluate(js)
 print('Full playthrough:',result,flush=True)
 print('Page errors:',errs,flush=True)
 assert result['solved']==36 and not errs
 pg.screenshot(path=str(base/'tests'/'qa_ending_preview.png'),full_page=True)
 b.close()
