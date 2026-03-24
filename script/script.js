const navbartoggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbartoggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbartoggle.classList.toggle('active');
});