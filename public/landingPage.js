// let close=document.querySelector(".close");
console.log("hello");
let close =document.querySelector(".Close i");
let more=document.querySelector(".more i");
let nav=document.querySelector(".nav-bar") ;
let btns=document.querySelectorAll(".nav-bar-option button");
let detail=document.querySelector(".user-detail");
more.addEventListener("click",()=>{
    console.log(more);
    nav.style.display="block";
    more.style.display="none";
    close.style.display="inline";
    more.style.zIndex=1;
    for(btn of btns){
        btn.style.display="block";
    }
    nav.style.width="316px";
    nav.style.height="430px";
    detail.style.display="inline";
})
close.addEventListener("click",()=>{  
    more.style.display="block";
    more.style.zIndex=3;
    close.style.display="none";
    for(btn of btns){
        btn.style.display="none";
    }
    nav.style.width=0;
    nav.style.height=0;
    detail.style.display="none";

});
