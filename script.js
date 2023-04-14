// Particles

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

    // Animation scroll library begin
    AOS.init();
};

// Animation scroll library

// Get all elements with the "data-my-attrs" attribute animated
var scrollIn = document.querySelectorAll('[data-my-attrs]');

// Apply the attributes
for (var i = 0; i < scrollIn.length; i++) {
    var attrs = scrollIn[i].getAttribute('data-my-attrs').split(',');
    scrollIn[i].setAttribute('data-aos', attrs[0]);
    scrollIn[i].setAttribute('data-aos-offset', attrs[1]);
    scrollIn[i].setAttribute('data-aos-delay', attrs[2]);
    scrollIn[i].setAttribute('data-aos-duration', attrs[3]);
    scrollIn[i].setAttribute('data-aos-easing', attrs[4]);
    scrollIn[i].setAttribute('data-aos-mirror', attrs[5]);
    scrollIn[i].setAttribute('data-aos-once', attrs[6]);
    scrollIn[i].setAttribute('data-aos-anchor-placement', attrs[7]);
}


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

// Stack Ref Computer/Mobile

let stacksLink = document.getElementById('stacksRefMobile')

if(window.innerWidth<925){
    stacksLink.href='#stacksRefMobile'
}else{
    stacksLink.href='#stacksRefComputer'
}

window.addEventListener('resize',()=>{
    if(window.innerWidth<925){
        stacksLink.href='#stacksRefMobile'
    }else{
        stacksLink.href='#stacksRefComputer'
    }    
})

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

