// make hamburger menu active 

const hamburgerMenu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

hamburgerMenu.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
    // console.log('click');
});

// close hamburger menu on click outside

document.addEventListener('click', function(event) {
    if(!hamburgerMenu.contains(event.target) && !navbarNav.contains(event.target)) {
        navbarNav.classList.remove('active');
    }
});

