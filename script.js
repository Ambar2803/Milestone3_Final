// Dynamic Welcome Message
window.onload = function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const hours = new Date().getHours();
    if (hours < 12) {
        welcomeMessage.textContent = "Good morning! Welcome to Ambar's Personal Website";
    } else if (hours < 18) {
        welcomeMessage.textContent = "Good afternoon! Welcome to Ambar's Personal Website";
    } else {
        welcomeMessage.textContent = "Good evening! Welcome to Ambar's Personal Website";
    }
};

// Pop-up on About Page
const aboutImage = document.getElementById('about-image');
if (aboutImage) {
    aboutImage.addEventListener('click', function() {
        alert("Surprise! Thanks for visiting the About page.");
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            formFeedback.textContent = "Thank you for your message, " + name + "! I'll get back to you soon.";
            contactForm.reset();
        } else {
            formFeedback.textContent = "Please fill out all fields before submitting.";
        }
    });
}
