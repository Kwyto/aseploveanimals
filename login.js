document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const loginButton = document.getElementById('loginBtn');
  const userDisplay = document.getElementById('userDisplay');
  const usernameSpan = document.getElementById('username');
  const logoutLink = document.getElementById('logout');

  // Check if a user is already logged in
  const loggedInUser = localStorage.getItem('username');
  if (loggedInUser) {
    updateNavbar(loggedInUser);
  }

  // Login form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const username = form.querySelector('input[type="text"]').value;

    // Save username in localStorage
    localStorage.setItem('username', username);

    // Redirect to the homepage
    window.location.href = "index.html";
  });

  // Logout functionality
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault(); 
    localStorage.removeItem('username'); 
    resetNavbar(); 
    window.location.href = "index.html"; 
  });

  function updateNavbar(username) {
    loginButton.style.display = 'none'; 
    userDisplay.style.display = 'inline-block'; 
    usernameSpan.textContent = username; 
  }

  function resetNavbar() {
    loginButton.style.display = 'inline-block'; 
    userDisplay.style.display = 'none'; 
    usernameSpan.textContent = ''; 
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const logoutLink = document.getElementById('logout');
    logoutLink.addEventListener('click', () => {
      // Clear localStorage and reset navbar
      localStorage.removeItem('username');
      resetNavbar();
    });
  });