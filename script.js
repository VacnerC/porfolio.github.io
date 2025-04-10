// Navbar responsive
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Formulario de contacto
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aquí podríamos añadir validación y envío AJAX
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    form.reset();
});

// Efecto scroll suave para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Cerrar el menú móvil si está abierto
            navLinks.classList.remove('active');
        }
    });
});