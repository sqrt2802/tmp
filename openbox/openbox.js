function startOpenbox(){const sieve=Number(document.getElementById("openboxFilter").value);const enableQD=document.getElementById("openboxType").selectedIndex;const outmtd=Number(document.getElementById("openboxOutput").selectedIndex);const all=document.querySelector("#textdiv>textarea").value.split("\n");let j=0;let fi=0;function check(){if(fi){return;}
if(cw().document.querySelectorAll("span.u").length<=25){setTimeout(()=>{check();},500);return;}
const progress=cw().document.querySelectorAll("span.u");let pos=-1;for(let i=25;i<progress.length;i++){const element=progress[i];if(element.textContent.split(" ")[0]==="》"){pos=i;break;}}
if(pos==-1){setTimeout(()=>{check();},500);return;}
const val=parseInt(progress[pos].textContent.split(" ")[2]);if(val>=sieve){if(outmtd==0){console.log(`${all[j]}`);}else if(outmtd==1){document.querySelector("textarea#result").value+=`${all[j]}\n`;}else{result+=`${all[j]}\n`;}}
j++;reload();setTimeout(()=>{check();},500);}
function reload(){if(j<all.length){if(enableQD==1){document.querySelector("#textdiv>textarea").value="!test!\n!\n\n"+all[j]+"\n"+all[j];}else{document.querySelector("#textdiv>textarea").value="!test!\n!\n\n"+all[j];}
document.querySelector(".goBtn").click();}else{if(outmtd==2){document.querySelector("#textdiv>textarea").value=result;}
alert("开箱完毕");if(outmtd==1){document.querySelector("textarea#result").value+="\n===结束===\n请不要重复使用此网页!"}
fi=1;}}
if(outmtd==1){const NW=document.createElement("textarea");NW.id="result";document.body.appendChild(NW);NW.setAttribute("readonly",true);document.getElementsByClassName("mdframe")[0].setAttribute("style","display:none;");}else if(outmtd==2){result="开箱输出:\n\n";}
reload();check();}
