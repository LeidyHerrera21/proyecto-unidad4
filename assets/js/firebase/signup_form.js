import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth, firestore } from './firebase.js';
import { showMessage } from './show_message.js';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const usuario = signupForm['usuario-signup'].value;
    const email = signupForm['email-signup'].value;
    const password = signupForm['password-signup'].value;

    console.log(email, usuario, password);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        userCredential.user.displayName = usuario;

        console.log(userCredential);

        console.log('Usuario registrado correctamente');
        
    showMessage("Bienvenido " + userCredential.user.displayName)

    setTimeout(() => {
        window.location.href = "principal.html";
    }, 2000);

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        console.log(error.menssege)
        console.log(error.code)

        if (error.code === 'auth/email-already-in-use'){
            showMessage("Email usado", "error")
        }
        else if(error.code === 'auth/invalid-email'){
            showMessage("Email invalido", "error")
        } else if (error.code === 'auth/weak-password'){
            showMessage("Contraseña Debil", "error")
        } else if (error.code){
            showMessage("Algo fallo", "error")
        }
    }
});