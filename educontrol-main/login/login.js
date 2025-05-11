document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí iría la lógica de autenticación
    // Por simplicidad, simularemos una autenticación básica
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
        setTimeout(function() {
            document.getElementById('errorMessage').style.display = 'none';
        }, 3000);
    }
});