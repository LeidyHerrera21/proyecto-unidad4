import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {auth} from './firebase.js'
import {showMessage} from "./show_message.js";

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
 
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('signin-modal'));
        signInForm.reset();
        modal.hide();

        show_message("Welcome" + userCredentials.user.email)

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage('Wrong password', 'red');
        } 
        else if (error.code === 'auth/user-not-found'){
            showMessage('User not found', 'red');
        }
        else {
            showMessage(error.message, 'error');  
        } 
    }
})