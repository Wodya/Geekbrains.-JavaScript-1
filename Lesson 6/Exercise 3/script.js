'use strict'
document.querySelectorAll(".product__button_info").forEach(button =>{
    button.addEventListener("click",e =>{
        const info = e.target.parentNode.parentNode.querySelector(".product__info");
        if(["","none"].includes(info.style.display)) {
            info.style.display = "block";
            e.target.parentNode.parentNode.querySelector(".product__image").style.display = "none";
            e.target.parentNode.parentNode.querySelector(".product__button_info").innerText = "Отмена";
        } else{
            info.style.display = "none";
            e.target.parentNode.parentNode.querySelector(".product__image").style.display = "inline-block";
            e.target.parentNode.parentNode.querySelector(".product__button_info").innerText = "Подробнее";
        }
    });
});

let basket = {
    wares: [],
    AddWare(name,price){
        let ware = basket.wares.find(p => p.name === name);
        if(ware === undefined)
            basket.wares.push(new Ware(name,price));
        else
            ware.quantity++;
        this.Redraw();
    },
    Redraw(){
        let html ="";
        let totalQuantity = 0;
        let totalSum = 0.0;
        for(let ware of this.wares){
            totalQuantity += ware.quantity;
            totalSum += ware.quantity*ware.price;
            html += `<div class="basket__row"><p class="basket__col-name">${ware.name}</p><p class="basket__col-quantity">${ware.quantity}</p><p class="basket__col-price">${ware.price}</p><p class="basket__col-sum">${ware.quantity*ware.price}</p></div>`;
        }
        document.querySelector(".basket__wares").innerHTML = html;
        let nodeTotal = document.querySelector(".basket__row-total");
        nodeTotal.querySelector(".basket__col-quantity").innerHTML = totalQuantity.toString();
        nodeTotal.querySelector(".basket__col-sum").innerHTML = totalSum.toString();
    }
};

class Ware{
    constructor(name,price) {
        this.name = name;
        this.price = price;
        this.quantity = 1;
        this.sum = price;
    }
}

document.querySelectorAll(".product__button_plus").forEach(button =>{
   button.addEventListener("click", e =>{
       let product = e.target.parentNode.parentNode;
       let name =  product.querySelector(".product__name").innerHTML;
       let price = parseFloat(product.querySelector(".product__price").innerHTML);
       basket.AddWare(name,price);
   });
});

