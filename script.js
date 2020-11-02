let about;
let offset;
let aside;

let interval = setInterval(spinArrow, 2000);
window.addEventListener("keydown", checkKey)

window.onwheel = scrolly;

function scrollDown() {
    about = document.querySelector("#about");
    about.scrollIntoView({behavior: "smooth"});
}

function spinArrow() {
    if (window.pageYOffset <= window.innerHeight -1) {
        arrow = document.querySelector("aside ul");
        arrow.classList.toggle("spinning");
    }
}

function scrolly(event) {
    // event.preventDefault();

    console.log(event.deltaY)

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
    console.log(event.keyCode);
    if( event.keyCode == 40) {
        scrollDown();
    } else if (event.keyCode == 38) {
        scrollUp();
    }
}

function scrollUp() {
    window.scrollBy({ top:window.innerHeight * -1, left: 0, behavior: "smooth" });
}
function scrollDown() {
    window.scrollBy({ top:window.innerHeight, left: 0, behavior: "smooth" });
}