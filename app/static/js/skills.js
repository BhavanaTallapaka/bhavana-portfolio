const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){

entry.target.querySelectorAll(".fill").forEach(bar=>{
bar.style.width = bar.dataset.width + "%";
});

}
});
},{threshold:.4});

observer.observe(document.querySelector("#skills"));