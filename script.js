var love = document.getElementById("love");
var no_love =document.getElementById("no-love");

love.addEventListener("click", myFunction);
function myFunction(){
 alert('Anh cũng yêu bé nè <3')
}

no_love.addEventListener("mouseover",lovefunction);
function lovefunction(){
   no_love.classList.toggle('move')
}
