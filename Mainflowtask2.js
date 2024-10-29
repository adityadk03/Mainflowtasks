document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = "Thank you for your message, we will get back to you soon!";
        formMessage.style.color = "green";
        // Optionally clear the form
        document.getElementById('contactForm').reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlidesManually();
}

function showSlidesManually() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

const featureItems = document.querySelectorAll('.feature-item');
const tooltip = document.querySelector('.tooltip');

featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const description = item.getAttribute('data-description');
        const image = item.getAttribute('data-image');

        tooltip.innerHTML = `<img src="${image}" alt="Feature Image"><br>${description}`;
        tooltip.style.display = 'block';

        const rect = item.getBoundingClientRect();
        tooltip.style.left = `${rect.right + 10}px`; 
        tooltip.style.top = `${rect.top + (rect.height / 2) - (tooltip.offsetHeight / 2)}px`;
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none'; // Hide tooltip
    });
});
