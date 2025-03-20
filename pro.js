let min=50;
let max=100;
const btn=document.getElementById("btn");
const lable=document.getElementById("lable");
let randomnum;
btn.onclick=function(){
    randomnum=Math.floor(Math.random()*(min - max))+min;
    lable.innerHTML="your lucky number is:"+randomnum;
}