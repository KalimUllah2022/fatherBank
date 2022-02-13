// Login Form Function
document.getElementById('submit-btn').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'kalim@kalim.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
});