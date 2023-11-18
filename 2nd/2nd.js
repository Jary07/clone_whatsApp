let select=document.getElementsByTagName('select')[0];
 let input1 = document.querySelector(".input1");
 let invalid=document.querySelector("#invalid");

function selectToChange(){select.onchange=function(){
input1.value=select.options[select.selectedIndex].value;
}
}
selectToChange();

function idValidation()
{
  const input2= document.querySelector(".input2").value;
  
  
  if(input1.value=="+977" && input2==9876543210)
  {
    window.location.href="../3rd/3rdpage.html";
    // console.log("done!");
  }
  if(input1.value != "+977" || input2 != 9876543210)
  {
    invalid.innerHTML="hello type correct number!please"
  invalid.hidden=false;
  return false;
  }
  else{
    return true;
      }
  if(input1.value == "" || input2 =="")
  {
   invalid.innerHTML="Enter phone number";
   invalid.hidden=false;
   return false;
  } 
  else
  {
    return true;
  }
}