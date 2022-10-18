const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("nav-links");
const hamburger = document.getElementById("hamburger");

burger.addEventListener('click',()=> {
    burgerMenu.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
    burgerMenu.classList.toggle("none");
})

document.onclick = function(e) {
    if(e.target.id !='nav-links' && e.target.id !='hamburger') {
        burgerMenu.classList.remove('nav-active')
        hamburger.classList.remove('toggle')
            burgerMenu.classList.add('none')
    }
}
