document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('hidden');
    });

    // Cierra el menú cuando se hace clic en un enlace
    const navLinks = document.querySelectorAll('.mobile-nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenu.classList.add('hidden');
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
            
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
            
     // Crear el mensaje para WhatsApp
    let whatsappMessage = `Hola, soy ${name}.`;
    whatsappMessage += ` ${message}`;
            
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
            
    // Crear el enlace de WhatsApp
    const whatsappURL = `https://wa.me/584245427700?text=${encodedMessage}`;
            
    // Redirigir a WhatsApp
    window.open(whatsappURL, '_blank');
});
