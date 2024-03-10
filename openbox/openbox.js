function startOpenbox(){
const sieve=Number(document.getElementById('openboxFilter').value);
const enableQD=document.getElementById('openboxType').selectedIndex;
const all=document.querySelector('#textdiv>textarea').value.split('\n');let j=0;let fi=0;function check(){if(fi){return;}
if(cw().document.querySelectorAll("span.u").length<=25){setTimeout(()=>{check();},500);return;}
const progress=cw().document.querySelectorAll("span.u");let pos=-1;for(let i=25;i<progress.length;i++){const element=progress[i];if(element.textContent.split(" ")[0]==="》"){pos=i;break;}}
if(pos==-1){setTimeout(()=>{check();},500);return;}
const val=parseInt(progress[pos].textContent.split(" ")[2]);if(val>=sieve){console.log(`${all[j]}`);}
j++;reload();setTimeout(()=>{check();},500);}
function reload(){if(j<all.length){if(enableQD==1){document.querySelector('#textdiv>textarea').value='!test!\n!\n\n'+all[j]+'\n'+all[j];}else{document.querySelector('#textdiv>textarea').value='!test!\n!\n\n'+all[j];}
document.querySelector('.goBtn').click();}else{alert('开箱完毕');fi=1;}}
reload();check();}