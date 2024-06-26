// Language Switch Function
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

// Authentication Functions
let loggedIn = false;

function updateAuthDisplay() {
    const authElement = document.getElementById('auth');
    if (loggedIn) {
        authElement.innerHTML = '<button onclick="logout()">Logout</button>';
    } else {
        authElement.innerHTML = '<button onclick="login()">Login</button>';
    }
}

function login() {
    loggedIn = true;
    updateAuthDisplay();
}

function logout() {
    loggedIn = false;
    updateAuthDisplay();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateAuthDisplay();
});
