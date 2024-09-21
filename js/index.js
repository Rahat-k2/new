// Basic client-side validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else {
        alert('Thank you for your message! We will get back to you soon.');
    }
});
