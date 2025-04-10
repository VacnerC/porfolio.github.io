// Navbar responsive
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




// Modal para proyectos
//const projectCards = document.querySelectorAll('.project-card');
const projectCards = document.querySelectorAll('.project-content');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close-modal');

// Datos de los proyectos (podrían venir de una API)
const projectsData = [
    {
        title: "E-commerce",
        image: "https://via.placeholder.com/600x400",
        description: "Tienda online completa con carrito de compras, sistema de pago y panel de administración. Desarrollada con React.js y Node.js.",
        demoLink: "#",
        codeLink: "#"
    },
    {
        title: "Blog Personal",
        image: "https://via.placeholder.com/600x400",
        description: "Plataforma de blog con sistema de comentarios, categorías y búsqueda. Implementado con WordPress personalizado y plugins desarrollados a medida.",
        demoLink: "#",
        codeLink: "#"
    },
    {
        title: "Aplicación Web",
        image: "https://via.placeholder.com/600x400",
        description: "Sistema de gestión de tareas con calendario integrado, recordatorios y colaboración en equipo. Construido con Vue.js y Firebase.",
        demoLink: "#",
        codeLink: "#"
    }
];

projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const project = projectsData[index];
        modalTitle.textContent = project.title;
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalDescription.textContent = project.description;
        
        // Actualizar enlaces
        document.querySelector('.demo-link').href = project.demoLink;
        document.querySelector('.code-link').href = project.codeLink;
        
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevenir scroll
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
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