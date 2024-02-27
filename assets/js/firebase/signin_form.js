import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './show_message.js';

const signinForm = document.querySelector("#signin-form");
signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = signinForm["email-signin"].value;
    const password = signinForm["password-signin"].value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        showMessage("Welcome de nuevo ", "success");

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage('Contraseña incorrecta', 'red');
        } 
        else if (error.code === 'auth/user-not-found'){
            showMessage('Usuario no encontrado', 'red');
        }
        else {
            showMessage(error.message, "Algo salió mal", "error");  
        } 
    }
});

