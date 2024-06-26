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
    const chatSection = document.getElementById('chat');
    if (loggedIn) {
        authElement.innerHTML = '<button onclick="logout()">Logout</button>';
        chatSection.style.display = 'block';
    } else {
        authElement.innerHTML = '<button onclick="login()">Login</button>';
        chatSection.style.display = 'none';
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

// Chat Functionality
const messages = [];

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput.value.trim() !== '') {
        messages.push(chatInput.value.trim());
        chatInput.value = '';
        displayMessages();
    }
}

function displayMessages() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';
    messages.forEach(message => {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateAuthDisplay();
});
