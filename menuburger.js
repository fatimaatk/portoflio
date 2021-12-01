const burger = document.querySelector(".burger");
const nav = document.querySelector("#nav");
nav.style.display = "none";


burger.addEventListener("click", function(){
    burger.classList.toggle("open");
    nav.style.display = nav.style.display == "flex" ? "none" : "flex";
});

