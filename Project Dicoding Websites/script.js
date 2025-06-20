const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});

const subscribeForm = document.getElementById('subscribe-form');
const subscribeMessage = document.getElementById('subscribe-message');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();

    setTimeout(() => {
        subscribeForm.reset();
        subscribeForm.classList.add('hidden');
        subscribeMessage.classList.remove('hidden');
    
        setTimeout(() => {
            subscribeMessage.classList.add('hidden');
            subscribeForm.classList.remove('hidden');
        }, 3000);
    }, 1000);
});

const articles = document.querySelectorAll('article');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

articles.forEach(article => {
    observer.observe(article);
});

document.getElementById('current-year').textContent = new Date().getFullYear();