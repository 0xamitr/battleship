(()=>{"use strict";const t=(t=>{let i=0,s=!1;const h=()=>i;return{hit:()=>{i++,5==h()&&(s=!0,console.log("ship has sunk"))},getHits:h,getSink:()=>s}})();t.hit(),t.hit(),t.hit(),t.hit()})();