'use strict'
const slider = {
    Images : [],
    CurrentNo : 0,
    IsRun:false,

    Init(){
        this.Images = Array.from(document.querySelector(".slider").querySelectorAll(".slider-img"));
        document.querySelector(".slider-left").addEventListener("click",this.Left.bind(this));
        document.querySelector(".slider-right").addEventListener("click",this.Right.bind(this));
        this.Images.forEach(p => p.style.left = "-100%");
        this.Images[0].style.left = "0";
    },
    Left(){
        if(this.IsRun)
            return;
        this.IsRun = true;
        let curImg = this.Images[this.CurrentNo];
        let nextNo = this.CurrentNo > 0 ? this.CurrentNo-1 : this.Images.length-1;
        let nextImg = this.Images[nextNo];
        nextImg.style.left = "100%";

        setTimeout(p =>{
            curImg.classList.add("slider-img_move");
            nextImg.classList.add("slider-img_move");
            curImg.style.left = "-100%";
            nextImg.style.left = "0";
        },0);
        setTimeout(p =>{
            curImg.classList.remove("slider-img_move");
            nextImg.classList.remove("slider-img_move");
            this.CurrentNo = nextNo;
            this.IsRun = false;
        },1100);
    },
    Right(){
        if(this.IsRun)
            return;
        this.IsRun = true;
        let curImg = this.Images[this.CurrentNo];
        let nextNo = this.CurrentNo < this.Images.length-1 ? this.CurrentNo + 1 : 0;
        let nextImg = this.Images[nextNo];
        nextImg.style.left = "-100%";

        setTimeout(p =>{
            curImg.classList.add("slider-img_move");
            nextImg.classList.add("slider-img_move");
            curImg.style.left = "100%";
            nextImg.style.left = "0";
        },0);
        setTimeout(p =>{
            curImg.classList.remove("slider-img_move");
            nextImg.classList.remove("slider-img_move");
            this.CurrentNo = nextNo;
            this.IsRun = false;
        },1100);
    }
}

window.addEventListener("load",event => {
    setTimeout(p => document.querySelector(".slider-wait").style.display="none",300);
    slider.Init();
});
