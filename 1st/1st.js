function dropDown(){

 let btn=document.querySelector(".btn");
 let btnMain=document.querySelector(".btn-main");
 let bottomList=document.querySelector(".list-b");
 var options= document.getElementsByClassName("options")
 
 let arrow=document.querySelector(".arrow");
 let arrowR=document.querySelector(".arrow-rotation");
 let a=1;
 btnMain.addEventListener("click" ,function(){
   arrow.classList.toggle("arrowR");
   
  if(a==1){
  bottomList.hidden= false ;
  a=0;
  }
    else{
      bottomList.hidden= true;
      a=1;
    }
   })

   
   for (option of options) {
     option.addEventListener("click", function() {
       btn.innerHTML = this.textContent;
       bottomList.hidden = true;
     })
   }
   
}


dropDown();
   