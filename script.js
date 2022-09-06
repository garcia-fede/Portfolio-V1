var main = document.getElementById("main");

// Scroll Value
var scrolled=0.01;

window.addEventListener("scroll",function(e){
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrolled)
})

// Cursor Movement
var cursor = document.getElementById("cursor");
document.addEventListener("mousemove",(e)=>{
    cursor.style.display = 'block'
    var x= e.clientX;
    var y= e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + scrolled + "px";
})

// Light/Dark Mode

let root = document.documentElement; // Getting CSS Variables access
var dark_switch = document.getElementById("dark_switch");
var toggleLight=true; // 1 = Light
dark_switch.addEventListener("change",()=>{
    toggleLight=!toggleLight;
    console.log(toggleLight)
    if(!toggleLight){
        root.style.setProperty('--background', "#121212");
        root.style.setProperty('--text_and_details', "#ffffff");
        root.style.setProperty('--section_background', "#161616");
    }
    else if(toggleLight){
        root.style.setProperty('--background', "#ffffff");
        root.style.setProperty('--text_and_details', "#121212");
        root.style.setProperty('--section_background', "#e4e4e4");
    }
})

