document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = e.target.username.value;
  const password = e.target.password.value;
  
  // Hard-coded check (not secure, just an example)
  if (username === 'admin' && password === 'password123') {
    // In a real app, you'd redirect to a protected page or set a session token.
    // Since this is just a static example:
    alert('Login successful!');
    // Redirect to homepage or a protected page (in reality, you'd need a server to handle real auth)
    window.location.href = 'index.html';
  } else {
    // Show an error message
    document.getElementById('error-message').textContent = 'Invalid username or password.';
  }
});
