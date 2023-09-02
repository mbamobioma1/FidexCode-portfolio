//show and hide navbar
const navwrap = document.querySelector(".nav-wrap");
const toggleBar = document.querySelector(".toggle-bar");
const navLinks = document.querySelectorAll(".nav-wrap");
toggleBar.addEventListener("click", function(){
    navwrap.classList.toggle("show-navwrap");
});
navLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        const eachLink = e.currentTarget;
        eachLink.classList.remove("show-navwrap");
    })
});

//show light or dark mode
const body = document.querySelector(".body-color");
const switchMode = document.querySelector(".mode");
switchMode.addEventListener("click", function(){
    if(!switchMode.classList.contains("switchmode")){
        switchMode.classList.add("switchmode");
        body.style.backgroundColor="black";
        body.style.color="white";
    }else{
        switchMode.classList.remove("switchmode");
        body.style.backgroundColor="white";
        body.style.color="black";
    }
});