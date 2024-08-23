document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("YmCOs63Xy2fIIhhHH");

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_ntqy2lj', 'template_emta7l7', this)
            .then(function() {
                alert('Message sent successfully!');
            }, function(error) {
                console.error('Error:', error);
                alert('There was an error sending your message. Please try again later.');
            });
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav_menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('open');
    });
});
