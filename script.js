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