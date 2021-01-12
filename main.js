const ul=document.querySelector("#home ul");
const ham=document.querySelector("#ham");
const cross=document.querySelector("#close");
if(window.innerWidth<750&&!ul.classList.contains("hide")){
    ul.classList.add("hide");}
window.addEventListener("resize",()=>{
    if(window.innerWidth<750&&!ul.classList.contains("hide")){
    ul.classList.add("hide");
    console.log("working")}
    // ;
})


const toggle=()=>{
    ul.classList.toggle("hide");
    ham.classList.toggle("hide");
    cross.classList.toggle("hide");
    console.log("working");
}