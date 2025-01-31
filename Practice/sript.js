// toggle icon navbar
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
// scroll to section
scrollLinksArray.forEach((link) => {
    link.addEventListener('click', () => {
        sections.forEach((section) => {
            if (section.id === link.id) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    ); 
// sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// animation on scroll
const animationItems = document.querySelectorAll('.animation');
const animationItemsArray = Array.from(animationItems);

// animation on scroll

animationItemsArray.forEach((item) => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > item.offsetTop - window.innerHeight / 1.5) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}
);
// animation footer on scroll
const footer = document.querySelector('.footer');
window.addEventListener('scroll', () => {
    if (window.scrollY > footer.offsetTop - window.innerHeight) {
        footer.classList.add('active');
    } else {
        footer.classList.remove('active');
    }
});
});
// remove toggle icon and navbar when click navbar links (scroll)
scrollLinksArray.forEach((link) => {
    link.addEventListener('click', () => {
        navbarList.classList.remove('active');
        toggleIcon.classList.remove('active');
    });
});
scrollLinksArray.forEach((link) => {
    link.addEventListener('click', () => {
        navbarList.classList.remove('active');
        toggleIcon.classList.remove('active');
    });
});

// scroll to top

const scrollTop = document.querySelector('.scroll-top');
scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// animation on scroll
// animation on scroll
// animation footer on scroll
// animation footer on scroll
// remove toggle icon and navbar when click navbar links (scroll)
// remove toggle icon and navbar when click navbar links (scroll)
// scroll to top
// scroll to top
// animation on scroll
// animation on scroll