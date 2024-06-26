// script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZEXyjgjqfn9mm07uU6HWCO5Mh0WuoxdY",
  authDomain: "brothers-in-justice.firebaseapp.com",
  databaseURL: "https://brothers-in-justice-default-rtdb.firebaseio.com",
  projectId: "brothers-in-justice",
  storageBucket: "brothers-in-justice.appspot.com",
  messagingSenderId: "969498625744",
  appId: "1:969498625744:web:f054be167bdcaf311ac0d5",
  measurementId: "G-4X09QK3ZGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the database service
const database = getDatabase(app);
const messagesRef = ref(database, 'messages'); 

// DOM References
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesContainer = document.querySelector('.chat-messages');

// Send Message Function
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        push(messagesRef, {
            message: message,
            timestamp: Date.now()
        });
        messageInput.value = ''; // Clear input field
    }
});

// Listen for new messages from Firebase
onValue(messagesRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const messageData = childSnapshot.val();
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.textContent = `${messageData.message} - ${new Date(messageData.timestamp).toLocaleTimeString()}`;
        messagesContainer.appendChild(messageElement);
    });
});
