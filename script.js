// Toggle Logic
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');

// Initial Icon State
function updateIcons() {
    if (document.documentElement.classList.contains('dark')) {
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
    } else {
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleLightIcon.classList.add('hidden');
    }
}

if (themeToggleBtn) {
    updateIcons();
    themeToggleBtn.addEventListener('click', toggleTheme);
}

if (themeToggleBtnMobile) {
    themeToggleBtnMobile.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('color-theme', 'dark');
    } else {
        localStorage.setItem('color-theme', 'light');
    }
    if (themeToggleBtn) updateIcons();
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('hidden');
    menu.classList.toggle('active');
    icon.classList.toggle('fa-bars-staggered');
    icon.classList.toggle('fa-times');
}

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-2xl');
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
    } else {
        navbar.classList.remove('shadow-2xl');
        backToTop.classList.add('opacity-0', 'pointer-events-none');
    }
});

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal(); // Check on load

// Service Form Submit
function submitServiceForm() {
    const toolType = document.getElementById('tool-service').value;
    const message = `Hi, I need service for: ${toolType}`;
    window.open(`https://wa.me/919605891130?text=${encodeURIComponent(message)}`, '_blank');
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Preload critical images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.loading !== 'lazy') {
            img.loading = 'eager';
        }
    });
});