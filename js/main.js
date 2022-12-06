document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.info',{delay:500});
ScrollReveal().reveal('.info-titulo',{delay:500});
ScrollReveal().reveal('.cards',{delay:500});
ScrollReveal().reveal('.locales',{delay:500});

