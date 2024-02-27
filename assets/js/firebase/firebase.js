// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
 // https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGp1PnT53R5VzuZL__Tl4uYeVnYQXA2Co",
  authDomain: "red-social-9c908.firebaseapp.com",
  projectId: "red-social-9c908",
  storageBucket: "red-social-9c908.appspot.com",
  messagingSenderId: "245862888224",
  appId: "1:245862888224:web:aaa5229bc6e3b882a1dd45"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const firestore = getFirestore(app);

console.log(app)