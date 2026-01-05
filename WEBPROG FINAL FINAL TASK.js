/*declare a js variable*/
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks')

/*to manipulate their behavior in the page*/
function toggleMenu(){
 burger.classList.toggle('toggle');
 navLinks.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);


const unifdropdown = document.querySelector(".unifdropdown");
const dropdownBtn1 = document.querySelector(".dropdown-btn1");

dropdownBtn1.addEventListener("click", () => {
    unifdropdown.classList.toggle("show");
});

const gallerydropdown = document.querySelector(".gallerydropdown");
const dropdownBtn2 = document.querySelector(".dropdown-btn2");

dropdownBtn2.addEventListener("click", () => {
    gallerydropdown.classList.toggle("show");
});

/*for auto hide header*/
let lastScroll = 0;
const mainheader = document.getElementById("mainheader");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if(currentScroll > lastScroll) {
        mainheader.style.top = "-120px";
    } else {
        mainheader.style.top = "10px";
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

