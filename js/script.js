document.addEventListener('DOMContentLoaded', function() {

    // Form validacija za contact form
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
                alert('Please fill out all fields.');
                event.preventDefault();
            }
        });
    }

    // Dynamic Greeting- zavisno od doba dana kada se gleda stranica
    const greetingElement = document.querySelector('#greeting');
    const currentHour = new Date().getHours();
    if (greetingElement) {
        if (currentHour < 12) {
            greetingElement.textContent = 'Dobro jutro!'; // jutro
        } else if (currentHour < 18) {
            greetingElement.textContent = 'Dobar dan!'; // dan
        } else {
            greetingElement.textContent = 'Dobro večer!'; // noc
        }
    }

    // Image Carousel (Slider) funkcionalnost
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel img');
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = (i === index) ? 'block' : 'none';
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        });
    }

    // display prve slike u carousel
    showImage(currentImageIndex);

    // Popup Modal f.
    const modal = document.querySelector('#popupModal');
    const openModalButton = document.querySelector('#openModal');
    const closeModalButton = document.querySelector('#closeModal');
    
    if (openModalButton && modal) {
        openModalButton.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }
    
    if (closeModalButton) {
        closeModalButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Responsive-mobile meni toggle f.
    const toggleButton = document.querySelector('#toggle-btn');
    const navList = document.querySelector('#nav-list');
    if (toggleButton && navList) {
        toggleButton.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

});
;
