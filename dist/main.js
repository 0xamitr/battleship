(()=>{"use strict";function e(e,t){const r=document.createElement("div");r.setAttribute("style","height: 58px; width: 58px; border: solid 1px black"),r.setAttribute("class",`${t}`);let l=0,a=0;for(let t=0;t<100;t++){let t=r.cloneNode(),o=[a,l];t.innerText=`${o}`,t.classList.add(`${o}`),t.style.fontSize="0",e.append(t),l++,l%10==0&&(a++,l=0)}}const t=()=>({playerboard:(()=>{let e=[[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9],[0,1,2,3,4,5,6,7,8,9]],t=!1;const r=[];let l=0;return{gameStatus:()=>t,place:(t,l,a)=>{console.log("placecalled");const o=(e=>{const t=e;let r=0,l=!1;const a=()=>(r==t&&(l=!0),l);return{cords:[],hit:()=>{if(1==l)return!1;r++,a()},isSunk:a}})(l);if(2!=t.length)return!1;if(l<1)return!1;let s=l;if((()=>{let a=[];if(10-t[1]>=l){let n=0;for(;s;)"ship"!=e[t[0]][t[1]+l-s]&&(a.push([[t[0]],[t[1]+l-s]]),n++),s--;if(n==l)return o.cords=a,r.push(o),a=[],!0}return!1})()){for(console.log("run"),s=l;s;){e[t[0]][t[1]+l-s]="ship";let r=[t[0],t[1]+l-s];console.log(document.getElementsByClassName(r)[0]),"player1"==a&&(document.getElementsByClassName(r)[0].style.backgroundColor="grey"),"player2"==a&&(document.getElementsByClassName(r)[1].style.backgroundColor="grey"),s--}return!0}return!1},receiveAttack:a=>{const o=r.length;return"ship"==e[a[0]][a[1]]?r.forEach((t=>{t.cords.forEach((r=>{a[0]==r[0]&&a[1]==r[1]&&(t.hit(),1==t.isSunk()&&l++,e[a[0]][a[1]]="X")}))})):e[a[0]][a[1]]="@",o==l&&(t=!0),e[a[0]][a[1]]},getboard:()=>e}})()});!function(){const t=document.getElementsByClassName("gameboard");e(t[0],"player1"),e(t[1],"player2")}(),function(e,t,r){let l=[],a=r,o=0,s=!0,n=a+1,c="placeship1";Array.from(document.getElementsByClassName("player1")).forEach((r=>{r.addEventListener("click",(()=>{if("placeship1"==c&&(1==e.playerboard.place(r.innerText.split(",").map(Number),n,"player1")&&(o++,n--),o==a))return c="placeship2",void(c=function(e,t){let r=0,l=t+1;for(;r<t;){let t=Math.floor(10*Math.random()),a=[Math.floor(10*Math.random()),t];1==e.playerboard.place(a,l,"player2")&&(l--,r++)}return"player1"}(t,a))}))})),Array.from(document.getElementsByClassName("player2")).forEach((r=>{r.addEventListener("click",(()=>{if(s&&"player1"==c&&"a"!=r.className){let a=t.playerboard.receiveAttack(r.innerText.split(",").map(Number));if(console.log(a),"X"==a&&(r.style.backgroundColor="red",r.setAttribute("class","a")),"X"!=a&&(r.style.backgroundColor="black",r.setAttribute("class","a")),1==t.playerboard.gameStatus())return console.log("player1 wins"),void(s=!1);c="player2",c=function(e,t,r){let l;do{let e=Math.floor(10*Math.random()),t=Math.floor(10*Math.random());l=[e,t]}while(t.some((e=>e[0]===l[0]&&e[1]===l[1])));t.push(l);let a=document.getElementsByClassName(l)[0],o=e.playerboard.receiveAttack(l);return"X"==o&&(a.style.backgroundColor="red"),"X"!=o&&(a.style.backgroundColor="black"),1==e.playerboard.gameStatus()?void console.log("player2 wins"):"player1"}(e,l)}}))}))}(t(),t(),4)})();