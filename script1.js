document.addEventListener("DOMContentLoaded", evt => {
  var myBox=document.getElementById("myBox");
  var clickCount=document.getElementById("clickCount");
  myBox.addEventListener("click", evt => {clickCount.innerHTML=Number.parseInt(clickCount.innerHTML, 10)+1;});
});
