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