// toggle icon navbar
function toggleNavbar() {
    const navbarList = document.querySelector('.navbar-list');
    const toggleIcon = document.querySelector('.toggle-icon');
    navbarList.classList.toggle('active');
    toggleIcon.classList.toggle('active');
}
// navbar links
const navbarLinks = document.querySelectorAll('.navbar-links');
const toggleIcon = document.querySelector('.toggle-icon');
const navbar = document.querySelector('.navbar');
const navbarList = document.querySelector('.navbar-list');
const navbarItems = document.querySelectorAll('.navbar-item');
const navbarLogo = document.querySelector('.navbar-logo');
const navbarLinksArray = Array.from(navbarLinks);
const navbarItemsArray = Array.from(navbarItems);
// scroll sections
const sections = document.querySelectorAll('section');
// scroll to section
const scrollLinks = document.querySelectorAll('.scroll-link');
const scrollLinksArray = Array.from(scrollLinks);
// toggle icon navbar
toggleIcon.addEventListener('click', () => {
    navbarList.classList.toggle('active');
    toggleIcon.classList.toggle('active');
});
// navbar links
navbarLinksArray.forEach((link) => {
    link.addEventListener('click', () => {
        navbarList.classList.remove('active');
        toggleIcon.classList.remove('active');
    });
});
// navbar items
navbarItemsArray.forEach((item) => {
    item.addEventListener('click', () => {
        navbarList.classList.remove('active');
        toggleIcon.classList.remove('active');
    });
});
// scroll sections