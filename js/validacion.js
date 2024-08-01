document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var emailError = document.getElementById('email-error');

    if (validateEmail(email)) {
        emailError.textContent = '';
        alert('Subscription successful!');
    } else {
        emailError.textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
