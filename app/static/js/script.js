const btn=document.getElementById("theme-toggle");

btn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
btn.textContent="🌙";
}else{
btn.textContent="☀️";
}

});

const roles = [
"Data Analytics Solutions",
"Machine Learning Models",
"Backend Systems",
"Automation Workflows"
];

let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect(){

const element = document.getElementById("typing-role");

if(!element) return;

if(!isDeleting){
currentText = roles[roleIndex].substring(0,charIndex+1);
charIndex++;

if(charIndex === roles[roleIndex].length){
isDeleting = true;
setTimeout(typeEffect,1200);
return;
}

}else{

currentText = roles[roleIndex].substring(0,charIndex-1);
charIndex--;

if(charIndex === 0){
isDeleting = false;
roleIndex = (roleIndex+1) % roles.length;
}

}

element.innerHTML = currentText;

setTimeout(typeEffect,isDeleting ? 40 : 80);
}

document.addEventListener("DOMContentLoaded",typeEffect);