let Tdot=document.getElementById("Tdot");
let moreElem=document.getElementById("more-elem");
let t=0;
Tdot.addEventListener('click',function(){
     
     if(t==0)
     {
        moreElem.hidden=false;
        t=1;
     }
     else
     {
        moreElem.hidden=true;
        t=0;
     }
})