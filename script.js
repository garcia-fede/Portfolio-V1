
// Scroll Value
var scrolled=0.01;
// var lastScroll;

window.addEventListener("scroll",function(e){
    // lastScroll=scrolled;
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
