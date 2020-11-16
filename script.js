let about;
let offset;
let aside;

let touchX;
let touchY;

let slides;
let curr_slide;

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", changeSize);

function init() {
    
    if (screen.width < 900) {
        document.querySelector("body").classList.add("normalscroll");
    }

    slides = document.querySelectorAll(".slides section");
    curr_slide = 0;
    slides[0].scrollIntoView({behavior: "smooth"});

    let interval = setInterval(spinArrow, 6000);
    window.addEventListener("keydown", checkKey);

    window.onwheel = scrolly;
}

function changeSize() {
    if (screen.width <= 900) {
        document.querySelector("body").className ="normalscroll";
    } else {
        document.querySelector("body").className ="";

    }
    
}

function spinArrow() {
    if (window.pageYOffset <= window.innerHeight -1) {
        arrow = document.querySelector("aside ul");
        arrow.classList.toggle("spinning");
    }
}

function scrolly(event) {
    if (event.deltaY > 0) {
       scrollDown();
    } else if ( event.deltaY < 0) {
        scrollUp();
    }

    if ( window.pageYOffset > window.innerHeight ) {
        aside = document.querySelector("aside");
        aside.classList.remove("hidden")
    }
}

function checkKey(event) {
    if( event.keyCode == 40) {
        scrollDown();
    } else if (event.keyCode == 38) {
        scrollUp();
    }
}

function scrollUp() {
    if (curr_slide != 0) {
        curr_slide = curr_slide -1
        slides[curr_slide].scrollIntoView({behavior: "smooth"});
    }
}

function scrollDown() {
    console.log(curr_slide)
    if (curr_slide +1 != slides.length) {
        curr_slide ++
        slides[curr_slide].scrollIntoView({behavior: "smooth"});
    }
}
