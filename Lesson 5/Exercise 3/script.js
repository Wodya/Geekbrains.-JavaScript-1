'use strict';
const popup = document.getElementsByClassName("content_popup")[0];
document.getElementById("button-press").addEventListener("click",p=>{
            popup.style.display = "flex";
            popup.classList.add("flip-scale-2-ver-right");
        });
popup.addEventListener("click",p =>{
    popup.classList.remove("flip-scale-2-ver-right");
    popup.classList.add("flip-scale-2-ver-left");
    setTimeout(p =>
    {
        popup.style.display = "none";
        popup.classList.remove("flip-scale-2-ver-left");
    },500);
})