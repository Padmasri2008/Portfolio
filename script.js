const slider = document.getElementById("slider");
function slideRight()
{
    slider.scrollLeft += 300;
}
function slideLeft()
{
    slider.scrollLeft -= 300;
}
document.querySelector(".btn1").addEventListener("click",function()
{

    document.getElementById("skillsq").scrollIntoView({
        behavior:"smooth"
    });
});
document.querySelector(".btn2").addEventListener("click",function(){
    document.getElementById("footer").scrollIntoView
    ({
        behavior:"smooth"
    });
});

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click",function(){
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        toggle.innerHTML="☀️";
    }
    else{
        toggle.innerHTML="🌙";
    }
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navRight = document.querySelector(".nav-right");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navRight.classList.toggle("active");
});
