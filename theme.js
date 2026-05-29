const themeBtn=document.getElementById("themeBtn");
if(themeBtn){
    themeBtn.addEventListener("click",()=>{
        document.body.classList.toggle("dark");
        const darkMode=document.body.classList.contains("dark");
        localStorage.setItem("theme",darkMode ? "dark":"light");
    });
}
const savedTheme=localStorage.getItem("theme");
if(savedTheme==="dark"){
    document.body.classList.add("dark");
}
