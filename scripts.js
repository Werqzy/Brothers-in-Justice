<script>
    // Initialize Firestore
    const db = firebase.firestore();

    // Function to send chat message
    function sendMessage() {
        const chatInput = document.getElementById('chat-input');
        if (chatInput.value.trim() !== '') {
            db.collection('messages').add({
                text: chatInput.value.trim(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            chatInput.value = '';
        }
    }

    // Function to load chat messages
    function loadMessages() {
        db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
            const chatBox = document.getElementById('chat-box');
            chatBox.innerHTML = '';
            snapshot.forEach(doc => {
                const message = doc.data();
                const messageElement = document.createElement('p');
                messageElement.textContent = message.text;
                chatBox.appendChild(messageElement);
            });
        });
    }

    // Monitor auth state changes
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            document.getElementById('auth').style.display = 'none';
            document.getElementById('chat').style.display = 'block';
            loadMessages();
        } else {
            document.getElementById('auth').style.display = 'block';
            document.getElementById('chat').style.display = 'none';
        }
    });
</script><script>
    // Function to login user
    function login() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Successfully logged in
                console.log("User logged in:", userCredential.user);
            })
            .catch((error) => {
                console.error("Error logging in:", error);
            });
    }

    // Function to signup user
    function signup() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Successfully signed up
                console.log("User signed up:", userCredential.user);
            })
            .catch((error) => {
                console.error("Error signing up:", error);
            });
    }
</script>

