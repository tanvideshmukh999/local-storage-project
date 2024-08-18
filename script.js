let textSave=document.querySelector("textarea");
let div=document.querySelector(".container");
textSave.value=localStorage.getItem("text")
textSave.addEventListener("input",()=>{
    localStorage.setItem("text",textSave.value);
})
