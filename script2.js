document.addEventListener("DOMContentLoaded", evt => {
  var clickCount=document.getElementById("clickCount");
  window.setInterval(()=>{clickCount.innerHTML=0;}, 30000);
});
