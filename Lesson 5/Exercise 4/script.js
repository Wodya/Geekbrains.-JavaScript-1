'use strict'
document.querySelectorAll(".product__button").forEach(button =>{
    button.addEventListener("click",e =>{
        const info = e.target.parentNode.querySelector(".product__info");
        if(["","none"].includes(info.style.display)) {
            info.style.display = "block";
            e.target.parentNode.querySelector(".product__image").style.display = "none";
            e.target.parentNode.querySelector(".product__button").innerText = "Отмена";
        } else{
            info.style.display = "none";
            e.target.parentNode.querySelector(".product__image").style.display = "inline-block";
            e.target.parentNode.querySelector(".product__button").innerText = "Подробнее";
        }
    });
})