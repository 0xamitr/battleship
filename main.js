(()=>{"use strict";function e(e,t){const r=document.createElement("div");r.setAttribute("style","height: 58px; width: 58px; border: solid 1px black"),r.setAttribute("class",`${t}`);let l=0,o=0;for(let t=0;t<100;t++){let t=r.cloneNode(),a=[o,l];t.innerText=`${a}`,t.classList.add(`${a}`),t.style.fontSize="0",e.append(t),l++,l%10==0&&(o++,l=0)}}const t=()=>({playerboard:(()=>{let e=[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]],t=!1;const r=[];let l=0;return{gameStatus:()=>t,place:(t,l,o)=>{console.log("placecalled");const a=(e=>{const t=e;let r=0,l=!1;const o=()=>(r==t&&(l=!0),l);return{cords:[],hit:()=>{if(1==l)return!1;r++,o()},isSunk:o}})(l);if(2!=t.length)return!1;if(l<1)return!1;let n=l;if((()=>{let o=[];if(10-t[1]>=l){let s=0;for(;n;)"ship"!=e[t[0]][t[1]+l-n]&&(o.push([[t[0]],[t[1]+l-n]]),s++),n--;if(s==l)return a.cords=o,r.push(a),o=[],!0}return!1})()){for(console.log("run"),n=l;n;){e[t[0]][t[1]+l-n]="ship";let r=[t[0],t[1]+l-n];console.log(document.getElementsByClassName(r)[0]),"player1"==o&&(document.getElementsByClassName(r)[0].style.backgroundColor="grey"),"player2"==o&&(document.getElementsByClassName(r)[1].style.backgroundColor="grey"),n--}return!0}return!1},receiveAttack:o=>{const a=r.length;return"ship"==e[o[0]][o[1]]?r.forEach((t=>{t.cords.forEach((r=>{o[0]==r[0]&&o[1]==r[1]&&(t.hit(),1==t.isSunk()&&l++,e[o[0]][o[1]]="X")}))})):e[o[0]][o[1]]="@",a==l&&(t=!0),e[o[0]][o[1]]},getboard:()=>e}})()});!function(){const t=document.getElementsByClassName("gameboard");e(t[0],"player1"),e(t[1],"player2")}(),function(){const e=t(),r=t();console.log("hi"),function(e,t,r){let l=[],o=r,a=0,n=!0,s="placeship1";Array.from(document.getElementsByClassName("player1")).forEach((r=>{r.addEventListener("click",(()=>{if("placeship1"==s&&(1==e.playerboard.place(r.innerText.split(",").map(Number),o+1,"player1")&&a++,2==a))return s="placeship2",void(s=function(e,t){let r=0;for(;r<2;){let l=Math.floor(10*Math.random()),o=[Math.floor(10*Math.random()),l];1==e.playerboard.place(o,t+1,"player2")&&(console.log("hii"),r++)}return"player1"}(t,o))}))})),Array.from(document.getElementsByClassName("player2")).forEach((r=>{r.addEventListener("click",(()=>{if(n&&"player1"==s&&"a"!=r.className){let o=t.playerboard.receiveAttack(r.innerText.split(",").map(Number));if(console.log(o),"X"==o&&(r.style.backgroundColor="red",r.setAttribute("class","a")),"X"!=o&&(r.style.backgroundColor="black",r.setAttribute("class","a")),1==t.playerboard.gameStatus())return console.log("player1 wins"),void(n=!1);s="player2",s=function(e,t,r){let l;do{let e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());l=[e,t]}while(t.some((e=>e[0]===l[0]&&e[1]===l[1])));t.push(l);let o=document.getElementsByClassName(l)[0],a=e.playerboard.receiveAttack(l);return"X"==a&&(o.style.backgroundColor="red"),"X"!=a&&(o.style.backgroundColor="black"),1==e.playerboard.gameStatus()?void console.log("player2 wins"):"player1"}(e,l)}}))}))}(e,r,2)}()})();