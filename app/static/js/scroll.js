// ===== EXISTING REVEAL CODE =====
const observer = new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("active");
}
});
},{threshold:.15});

document.querySelectorAll("section").forEach(sec=>{
sec.classList.add("reveal");
observer.observe(sec);
});


// ===== ADD THIS (NAVBAR SCROLL EFFECT) =====
window.addEventListener("scroll", () => {
const nav = document.querySelector("nav");

if(window.scrollY > 50){
nav.classList.add("scrolled");
}else{
nav.classList.remove("scrolled");
}
});