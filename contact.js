document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("jw8-losCLDaq5Ewx8");

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_sunbw2d', 'template_ago78k8', this)
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
