!function(){"use strict";console.log("Я Пример вызова JS!"),document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".burger-menu"),e=document.querySelector(".header_top__nav__list");t.addEventListener("click",(function(){e.classList.toggle("active"),t.classList.toggle("active")}))})),function(){const t=document.getElementById("scrollToBottom"),e=document.getElementById("bottomAnchor");t.addEventListener("click",(()=>{e.scrollIntoView({behavior:"smooth"})}))}(),function(){const t=document.querySelectorAll(".number"),e=document.querySelector(".count-section");let n=!1;window.addEventListener("scroll",(()=>(t=>{const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)})(e)&&void(n||(n=!0,t.forEach(((t,e)=>{const n=parseInt(t.getAttribute("data-target")),o=n/20;let c=0;const i=()=>{c<n?(c+=o,t.textContent=Math.round(c),setTimeout(i,10)):t.textContent=n};setTimeout(i,200*e)}))))))}()}();