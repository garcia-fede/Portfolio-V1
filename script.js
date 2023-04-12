window.onload= function() {
    Particles.init({
        selector: '.background-particles',
        color: ['#DA0463', '#CC5500'],
        connectParticles: true,
        maxParticles:40,
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false
                }
            }
        }
    });
};

// Scroll Value
var scrolled=0.01;

// Cursor Movement
var cursor = document.getElementById("cursor");
document.addEventListener("mousemove",(e)=>{
    var x= e.clientX;
    var y= e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + scrolled + "px";
})

var nav_items = document.querySelectorAll(".nav-item");
var hamburger_checkbox = document.querySelector("#hamburger_checkbox")
nav_items.forEach((item)=>{
    item.addEventListener("mouseover",(e)=>{
        cursor.style.display='block'
    })
    item.addEventListener("click",()=>{
        //Active
        nav_items.forEach(i=>{
            if(i!=item){
                i.style.color= "var(--text_and_details)";
                i.style.paddingBottom='0px';
                i.style.borderBottom='0px';
            }
            else{
                i.style.color='var(--orange_contrast)';
                i.style.textShadow= "rgba(0, 0, 0, 0.5) 0px 0 10px";
                i.style.borderBottom='1px solid var(--orange_contrast)';
            }
        })
        hamburger_checkbox.checked=false
    })
})


//Responsive nav ul
/*
    This is needed because on CSS media query at 925px the position switches to "fixed", this meaning that 
    "width" can no longer be 100% as the element it's no longer related to it's direct parent but to the total width.
    By getting the width of windows that always stays 100%, this issue can be solved
*/ 
var responsiveNavUl = document.getElementById('responsiveNav')
if(window.innerWidth<=925){
    responsiveNavUl.style.width=`${window.innerWidth}px`
}

window.addEventListener('resize',()=>{
    if(window.innerWidth<=925){
        responsiveNavUl.style.width=`${window.innerWidth}px`
    }
})

// Animation scroll library

const srBottom = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 500,
    delay: 100,
    easing: 'ease-out',
    reset: true,
    mobile: false
})
srBottom.reveal('.scrollIn');

const srFadeIn = ScrollReveal({
    origin: 'bottom',
    distance: '10px',
    opacity: 0.8,
    duration: 500,
    delay: 100,
    easing: 'ease-out',
    mobile: false
})
srFadeIn.reveal('.fadeIn');

// Parallax Tech Stack

// window.addEventListener("scroll", function() {
//     var scrollTop = window.pageYOffset;
//     var rowToRight = document.querySelectorAll(".toRight");
//     var rowToLeft = document.querySelector(".toLeft");
//     rowToRight.forEach(row=>{
//         row.style.left = -scrollTop/4.5 + "px";
//     })
//     rowToLeft.style.right = -scrollTop/4.5 + "px";
// });
function handleParallax() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var rowToRight = document.querySelectorAll(".toRight");
    var rowToLeft = document.querySelector(".toLeft");
    rowToRight.forEach(row => {
        row.style.left = -scrollTop / 4.5 + "px";
    })
    rowToLeft.style.right = -scrollTop / 4.5 + "px";
}

// Add event listeners for both scroll and touchmove events
window.addEventListener("scroll", handleParallax);
window.addEventListener("touchmove", handleParallax);

var viewportBottom = window.innerHeight + window.pageYOffset;
console.log(viewportBottom);

// Light/Dark Mode

let root = document.documentElement; // Getting CSS Variables access
var dark_switch = document.getElementById("dark_switch");
var toggleLight=true; // 1 = Light
var codetag = document.getElementById("code-tag");
dark_switch.addEventListener("change",()=>{
    toggleLight=!toggleLight;
    if(!toggleLight){
        root.style.setProperty('--background', "#1c1d21");
        root.style.setProperty('--opposite_background', "#ffffff");
        root.style.setProperty('--text_and_details', "#ffffff");
        root.style.setProperty('--section_background', "#161616");
        codetag.style.filter = "invert(0%)"
    }
    else if(toggleLight){
        root.style.setProperty('--background', "#ffffff");
        root.style.setProperty('--opposite_background', "#1c1d21");
        root.style.setProperty('--text_and_details', "#121212");
        root.style.setProperty('--section_background', "#e4e4e4");
        codetag.style.filter = "invert(100%)"
    }
})

