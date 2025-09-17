
let obj=[];
let obj2=[];
let obj3=[];
let obj4=[];
let obj5=[];
let obj6=[];
let obj7=[];
let obj8=[];

let btn=document.querySelector(".one");
btn.addEventListener("click",()=>{
    obj.push(347);
    obj2.push(63);
    obj3.push(24);
    obj4.push(1.2);
    obj5.push(8);
    obj6.push(132);
    obj7.push(6.7);
    obj8.push(189);
});
let btn2=document.querySelector(".two")
btn2.addEventListener("click",()=>{
    obj.push(111);
    obj2.push(23);
    obj3.push(2.6);
    obj4.push(0.9);
    obj5.push(1.8);
    obj6.push(10);
    obj7.push(0.4);
    obj8.push(43);
});
let btn3=document.querySelector(".three")
btn3.addEventListener("click",()=>{
    obj.push(23);
    obj2.push(3.6);
    obj3.push(2.9);
    obj4.push(0.4);
    obj5.push(2.2);
    obj6.push(99);
    obj7.push(2.7);
    obj8.push(79);
});
let btn4=document.querySelector(".four")
btn4.addEventListener("click",()=>{
    obj.push(98);
    obj2.push(3.4);
    obj3.push(11);
    obj4.push(4.3);
    obj5.push(0);
    obj6.push(83);
    obj7.push(0.1);
    obj8.push(11);
});
let btn5=document.querySelector(".five")
btn5.addEventListener("click",()=>{
    obj.push(41);
    obj2.push(9.6);
    obj3.push(0.9);
    obj4.push(0.2);
    obj5.push(2.8);
    obj6.push(33);
    obj7.push(0.3);
    obj8.push(12);
});
let btn6=document.querySelector(".six")
btn6.addEventListener("click",()=>{
    obj.push(15);
    obj2.push(3.6);
    obj3.push(0.7);
    obj4.push(0.1);
    obj5.push(0.5);
    obj6.push(16);
    obj7.push(0.3);
    obj8.push(13);
});
let btn7=document.querySelector(".seven")
btn7.addEventListener("click",()=>{
    obj.push(335);
    obj2.push(62);
    obj3.push(22);
    obj4.push(1.5);
    obj5.push(8);
    obj6.push(73);
    obj7.push(5.8);
    obj8.push(110);
});
let btn8=document.querySelector(".eight")
btn8.addEventListener("click",()=>{
    obj.push(52);
    obj2.push(14);
    obj3.push(0.3);
    obj4.push(0.2);
    obj5.push(2.4);
    obj6.push(6);
    obj7.push(0.1);
    obj8.push(5);
});
let btn9=document.querySelector(".add");
let sum=0;
let sum2=0;
let sum3=0;
let sum4=0;
let sum5=0;
let sum6=0;
let sum7=0;
let sum8=0;

btn9.addEventListener(("click"),()=>{
    sum=0;
    sum2=0;
    sum3=0;
    sum4=0;
    sum5=0;
    sum6=0;
    sum7=0;
    sum8=0;
    for(objs of obj){
        sum=sum+objs; 
    }
    for(objs2 of obj2){
        sum2 =sum2 +objs2;
    }
    for(objs3 of obj3){
        sum3 =sum3 +objs3;
    }
    for(objs4 of obj4){
        sum4 =sum4 +objs4;
    }
    for(objs5 of obj5){
        sum5 =sum5 +objs5;
    }
    for(objs6 of obj6){
        sum6 =sum2 +objs6;
    }
    for(objs7 of obj7){
        sum7 =sum7 +objs7;
    }
    for(objs8 of obj8){
        sum8 =sum8 +objs8;
    }
    console.log(sum);
    document.getElementById("sumInput").value = sum.toFixed(2);
    document.getElementById("sumInput2").value = sum2.toFixed(2);
    document.getElementById("sumInput3").value = sum3.toFixed(2);
    document.getElementById("sumInput4").value = sum4.toFixed(2);
    document.getElementById("sumInput5").value = sum5.toFixed(2);
    document.getElementById("sumInput6").value = sum6.toFixed(2);
    document.getElementById("sumInput7").value = sum7.toFixed(2);
    document.getElementById("sumInput8").value = sum8.toFixed(2);
})



