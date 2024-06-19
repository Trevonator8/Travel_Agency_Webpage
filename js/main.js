// Global Variables
const menuToggleIcon = document.getElementById('menu-toggle-icon');
const navMobile = document.getElementById('nav');
const headerElement = document.getElementById('header');



// Toggle navigation
const toggleMenu = () =>{
    navMobile.classList.toggle('active');
    headerElement.classList.toggle('active');
}

menuToggleIcon.addEventListener('click', toggleMenu);

// Add or remove header border bottom on scroll
const headerScrollEvent = () =>{
    if(this.scrollY >= 30){
        headerElement.classList.add('active-scroll');
    } else {
        headerElement.classList.remove('active-scroll');
    }
}

window.addEventListener('scroll', headerScrollEvent);