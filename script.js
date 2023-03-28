var main = document.getElementById("main");

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
nav_items.forEach((item)=>{
    item.addEventListener("mouseover",(e)=>{
        cursor.style.display='block'
    })
    item.addEventListener("click",(e)=>{
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
    })
})

// Parallax Tech Stack

window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset;
    var rowToRight = document.querySelectorAll(".toRight");
    var rowToLeft = document.querySelector(".toLeft");
    rowToRight.forEach(row=>{
        row.style.left = -scrollTop/4.5 + "px";
        row.style.top = +scrollTop/100 + "px";
    })
    rowToLeft.style.right = -scrollTop/4.5 + "px";
    row.style.top = +scrollTop/100 + "px";
});

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

