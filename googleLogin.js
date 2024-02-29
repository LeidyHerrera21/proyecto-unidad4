import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './show_message.js';

const googlebuttom = document.querySelector('#google-login')

googlebuttom.addEventListener('click', async () =>{

  const provider = new GoogleAuthProvider()

 try {
    const userCredentials = await signInWithPopup(auth, provider )
    console.log(userCredentials);

    const modal = bootstrap.Modal.getInstance(document.querySelector('signin-modal'));
    modal.hide();

    show_message("Welcome" + userCredentials.user.displayName)

 } catch (error) {
    console.log(error)
 }
});