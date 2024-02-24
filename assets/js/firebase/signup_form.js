import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {auth} from './firebase.js';
import {showMessage} from "./show_message.js";

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        const signupModal = document.getElementById('#signup-modal')
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide()

        show_message("Welcome" + userCredentials.user.email)

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('Email already in use', 'red');
        } 
        else if (error.code === 'auth/invalid-email'){
            showMessage('Invalide email', 'red');
        }
        else if (error.code === 'auth/weak-password'){
            showMessage('Weak password', 'red');
        }
        else {
            showMessage('Something went wrong', 'red');
            
        } 
    }

})