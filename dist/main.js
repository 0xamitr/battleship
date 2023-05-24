(()=>{"use strict";function e(e,t){const r=document.createElement("div");r.setAttribute("style",'min-height: calc(~"3vw - 2px"); min-width: calc(~"3vw - 2px"); border: solid 1px black'),r.setAttribute("class",`${t}`);let l=0,a=0;for(let t=0;t<100;t++){let t=r.cloneNode(),o=[a,l];t.innerText=`${o}`,t.classList.add(`${o}`),t.style.fontSize="0",e.append(t),l++,l%10==0&&(a++,l=0)}}const t=()=>({playerboard:(()=>{let e=[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]],t=!1;const r=[];let l=0;return{gameStatus:()=>t,place:(t,l,a)=>{console.log("placecalled");const o=(e=>{const t=e;let r=0,l=!1;const a=()=>(r==t&&(l=!0),l);return{cords:[],hit:()=>{if(1==l)return!1;r++,a()},isSunk:a}})(l);if(2!=t.length)return!1;if(l<1)return!1;let n=l;if((()=>{let a=[];if(10-t[1]>=l){let s=0;for(;n;)"ship"!=e[t[0]][t[1]+l-n]&&(a.push([[t[0]],[t[1]+l-n]]),s++),n--;if(s==l)return o.cords=a,r.push(o),a=[],!0}return!1})()){for(console.log("run"),n=l;n;){e[t[0]][t[1]+l-n]="ship";let r=[t[0],t[1]+l-n];"player1"==a&&(document.getElementsByClassName(r)[0].style.backgroundColor="grey"),n--}return!0}return!1},receiveAttack:a=>{const o=r.length;return"ship"==e[a[0]][a[1]]?r.forEach((t=>{t.cords.forEach((r=>{a[0]==r[0]&&a[1]==r[1]&&(t.hit(),1==t.isSunk()&&l++,e[a[0]][a[1]]="X")}))})):e[a[0]][a[1]]="@",o==l&&(t=!0),e[a[0]][a[1]]},getboard:()=>e}})()});!function(){const t=document.getElementsByClassName("gameboard");e(t[0],"player1"),e(t[1],"player2")}(),function(){const e=t(),r=t();document.getElementById("status").innerText="Place your Aircraft Carrier",function(e,t,r){let l=[],a=r,o=0,n=!0,s=a+1,c="placeship1",u=null,i=null,d=document.getElementById("status");Array.from(document.getElementsByClassName("player1")).forEach((r=>{r.addEventListener("click",(()=>{if("placeship1"==c&&n&&(1==e.playerboard.place(r.innerText.split(",").map(Number),s,"player1")&&(0===o&&(d.innerText="Place your Submarine"),1===o&&(d.innerText="Place your Destroyer"),2===o&&(d.innerText="Place your Ship"),o++,s--),o===a))return c="placeship2",d.innerText="Attack",void(c=function(e,t){let r=0,l=t+1;for(;r<t;){let t=Math.floor(10*Math.random()),a=[Math.floor(10*Math.random()),t];1==e.playerboard.place(a,l,"player2")&&(l--,r++)}return"player1"}(t,a))}))})),Array.from(document.getElementsByClassName("player2")).forEach((r=>{r.addEventListener("click",(()=>{if(n&&"player1"===c&&"a"!=r.className){let a=t.playerboard.receiveAttack(r.innerText.split(",").map(Number));if("X"===a&&(r.style.backgroundColor="red",r.setAttribute("class","a")),"X"!==a&&(r.style.backgroundColor="black",r.setAttribute("class","a")),1==t.playerboard.gameStatus())return console.log("player1 wins"),d.innerText="YOU WIN!",void(n=!1);c="player2";let o=function(e,t,r,l,a){let o;console.log(l),console.log(a);let n=document.getElementById("status");if(null==l&&null==a){do{let e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());o=[e,t]}while(t.some((e=>e[0]===o[0]&&e[1]===o[1])));t.push(o);let r=document.getElementsByClassName(o)[0],s=e.playerboard.receiveAttack(o);return"X"==s&&(r.style.backgroundColor="red",a=[o[0],o[1]+1],(t.some((e=>e[0]===a[0]&&e[1]===a[1]))||a[1]<0||a[1]>9)&&(a=null),l=[o[0],o[1]-1],(t.some((e=>e[0]===l[0]&&e[1]===l[1]))||l[1]<0||l[1]>9)&&(l=null)),"X"!=s&&(r.style.backgroundColor="black"),1==e.playerboard.gameStatus()?(console.log("player2 wins"),void(n.innerText="The Computer WINS! Better luck next time!")):["player1",l,a]}if(null!=l){o=l,t.push(o);let r=document.getElementsByClassName(o)[0],s=e.playerboard.receiveAttack(o);return"X"==s&&(r.style.backgroundColor="red",l=[l[0],l[1]-1],(t.some((e=>e[0]===l[0]&&e[1]===l[1]))||l[1]<0||l[1]>9)&&(l=null)),"X"!=s&&(r.style.backgroundColor="black",l=null),1==e.playerboard.gameStatus()?(n.innerText="The Computer WINS! Better luck next time!",void console.log("player2 wins")):["player1",l,a]}if(null!=a){o=a;let r=document.getElementsByClassName(o)[0],s=e.playerboard.receiveAttack(o);return t.push(o),"X"==s&&(r.style.backgroundColor="red",a=[a[0],a[1]+1],(t.some((e=>e[0]===a[0]&&e[1]===a[1]))||a[1]<0||a[1]>9)&&(a=null)),"X"!=s&&(r.style.backgroundColor="black",a=null),1==e.playerboard.gameStatus()?(n.innerText="The Computer WINS! Better luck next time!",void console.log("player2 wins")):["player1",l,a]}}(e,l,0,u,i);void 0!==o&&(c=o[0],u=o[1],i=o[2])}}))}))}(e,r,4)}()})();