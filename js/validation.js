document.getElementById('page6-subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('page6-email').value;
    var emailError = document.getElementById('page6-email-error');

    if (validateEmail(email)) {
        emailError.textContent = '';
        alert('Subscription successful!');
        document.getElementById('page6-email').value = '';
    } else {
        emailError.textContent = 'Please enter a valid email address.';
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
