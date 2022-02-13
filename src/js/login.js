// Login Form Function
document.getElementById('submit-btn').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    if (userEmail == 'kali' && userPass == '1') {
        window.location.href = 'banking.html'
    }
});