import { onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"

import { auth} from "./firebase/firebase.js"
import {loginCheck} from  './firebase/loginCheck.js';

import './firebase/signup_form.js';
import './firebase/signin_form.js';
import './firebase/googleLogin.js';
import './firebase/logout.js';


onAuthStateChanged( auth, async (user) => {
    
     loginCheck(user)
     if (user) {
        loginCheck(user);

        import('./firebase/setup_tasks.js')
         .then(({default: septuTasks}) => septuTasks(user));
    } 
    
    // Si ha salido
    else {
        loginCheck(user);
    }

})