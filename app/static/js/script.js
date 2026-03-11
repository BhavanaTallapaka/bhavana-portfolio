const btn=document.getElementById("theme-toggle");

btn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
btn.textContent="🌙";
}else{
btn.textContent="☀️";
}

});

const text = "I build practical software and data solutions — from backend systems to analytics dashboards and automation workflows.";

let index = 0;

function typeEffect(){
    if(index < text.length){
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 25);
    }
}

window.onload = typeEffect;