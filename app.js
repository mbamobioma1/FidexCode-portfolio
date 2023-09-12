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
//dark mode
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
light.addEventListener("click", function(){
    document.body.classList.add("switchmode");
});
dark.addEventListener("click", function(){
    document.body.classList.remove("switchmode");
});
//scroll top
/*const topLink = document.querySelector(".scroll-top");
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    if(scrollHeight < 500){
        topLink.classList.add("showtop");
    }else{
    }
    console.log(scrollHeight);
})
console.log(topLink)*/