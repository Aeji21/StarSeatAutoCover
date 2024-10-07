document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            this.reset(); // Reset the form fields
        } else {
            alert('There was a problem sending your message.');
        }
    }).catch(error => {
        alert('There was a problem sending your message.');
    });
});
