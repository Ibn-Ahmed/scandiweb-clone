const burger = document.getElementById("burger");
const burgerMenu = document.getElementById("nav-links");
const hamburger = document.getElementById("hamburger");
const wrapper = document.getElementById("wrapper");


//open and close menu, toggle menu and close sign
burger.addEventListener('click',()=> {
    burgerMenu.classList.toggle("nav-active");
    hamburger.classList.toggle("toggle");
    burgerMenu.classList.toggle("none");

})

//click anywhere to close menu
document.onclick = function(e) {
    if(e.target.id !='nav-links' && e.target.id !='hamburger') {
        burgerMenu.classList.remove('nav-active')
        hamburger.classList.remove('toggle')
            burgerMenu.classList.add('none')
    }
}



//when scrolling has stopped.
const timer = -1;
document.addEventListener('scroll', function() {
    wrapper.style.backgroundColor = "#FFF";
    wrapper.style.boxShadow = "4px 0 84px 20px rgb(77 90 203 / 17%)";
    if(timer !== -1) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          // do something

        wrapper.style.backgroundColor = "#EBEFF6";
           
    }, 250);
}, true);
