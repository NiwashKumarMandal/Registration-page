document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    
    if (password.value == confirmPassword.value) {
        alert('Registered successfully!');
        location.reload();
    } else {
        alert('Passwords do not match. Please try again.');
        password.value="";
        confirmPassword.value="";
    }
});
