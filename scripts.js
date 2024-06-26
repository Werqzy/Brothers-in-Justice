function switchLanguage() {
    const elements = document.querySelectorAll('[data-en], [data-fr]');
    elements.forEach(element => {
        if (document.documentElement.lang === 'fr') {
            element.innerText = element.getAttribute('data-en');
        } else {
            element.innerText = element.getAttribute('data-fr');
        }
    });
    document.documentElement.lang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
    document.getElementById("lang-switch").innerText = document.documentElement.lang === 'fr' ? "Switch to English" : "Basculer en français";
}

function showLogin() {
    document.getElementById('login-modal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('login-modal').style.display = 'none';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demo purposes, we will assume any non-empty credentials are valid
    if (username && password) {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('logout-btn').style.display = 'inline-block';
        closeLogin();
        alert('Logged in successfully');
    } else {
        alert('Invalid credentials');
    }
}

function logout() {
    document.getElementById('login-btn').style.display = 'inline-block';
    document.getElementById('logout-btn').style.display = 'none';
    alert('Logged out successfully');
}
