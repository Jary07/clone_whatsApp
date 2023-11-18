let message=document.getElementById("name1");
let change="3rdpage.html";

Array.from(message);

message.addEventListener("click",function(){
    window.location.href= "message-sheet.html";

    message.style.backgroundColor="red";
})