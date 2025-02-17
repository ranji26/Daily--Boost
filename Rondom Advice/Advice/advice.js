var disadvice=document.querySelector(".dis-advice")
var button=document.querySelector(".button")

async function getadvice(){
    const response=await fetch("https://api.adviceslip.com/advice");
    const data=await response.json();
    disadvice.textContent=`"${data.slip.advice}"`;

}
button.addEventListener("click",getadvice)