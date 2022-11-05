
let display=document.getElementsByClassName("display")[0]
let zero=document.getElementById("0");
zero.addEventListener("click",function(){

display.innerHTML+="0";

})
let xx=document.getElementById("1");
xx.addEventListener("click",function(){

display.innerHTML+="1";

})
let x=document.getElementById("2");
x.addEventListener("click",function(){

display.innerHTML+="2";

})
let xy=document.getElementById("3");
xy.addEventListener("click",function(){

display.innerHTML+="3";

})
let four=document.getElementById("4");
four.addEventListener("click",function(){

display.innerHTML+="4";

})
let five=document.getElementById("5");
five.addEventListener("click",function(){

display.innerHTML+="5";

})
let six=document.getElementById("6");
six.addEventListener("click",function(){

display.innerHTML+="6";

})
let seven=document.getElementById("7");
seven.addEventListener("click",function(){

display.innerHTML+="7";

})
let eight=document.getElementById("8");
eight.addEventListener("click",function(){

display.innerHTML+="8";

})
let nine=document.getElementById("9");
nine.addEventListener("click",function(){

display.innerHTML+="9";

})
let plus=document.getElementById("+");
plus.addEventListener("click",function(){

display.innerHTML+="+";

})
let minus=document.getElementById("-");
minus.addEventListener("click",function(){

display.innerHTML+="-";

})
let divi=document.getElementById("/");
divi.addEventListener("click",function(){

display.innerHTML+="/";

})
let muli=document.getElementById("*");
muli.addEventListener("click",function(){

display.innerHTML+="*";

})
let per=document.getElementById("%");
per.addEventListener("click",function(){

display.innerHTML+="%";

})

let main=document.getElementById("=");
main.addEventListener("click",function(){

let ans=0;

let str=display.innerText;
let prev=0;
let prevop=undefined
let rr=Array.from(str);

let len=rr.length

rr.forEach((elm,index)=>{

let chk=false;
if(index==len-1){
    chk=true;
}

if(chk){
    elm=parseInt(elm)
    ans=ans*10+elm;
}

if(chk!=true && (elm!='+' &&  elm!='-' && elm!='/' && elm!='*' && elm!='%') ){
   
    elm=parseInt(elm)

ans=ans*10+elm;
}else{

if(prevop!=undefined){
    ans=parseInt(ans);
    if(prevop=='+'){
prev=prev+ans;
    }
    if(prevop=='-'){
        prev=prev-ans;
    }
    if(prevop=='/'){
        prev=prev/ans;
    }
    if(prevop=='*'){
        prev=prev*ans;
    }
    if(prevop=='%'){
        prev=prev/100*ans;
    }
    ans=0;
  
    prevop=elm
}
else{
prev=parseInt(ans);

prevop=elm;
ans=0;
}
}

})
let anx=prev;
display.innerText=anx


})

let eraseall=document.getElementById("cc");
eraseall.addEventListener("click",function(){
    display.innerText=""
})

let eraseone=document.getElementById("rmv");
eraseone.addEventListener("click",function(){
    let str=display.innerText;
    let substr=str.substr(0,str.length-1)
    display.innerText=substr;

})