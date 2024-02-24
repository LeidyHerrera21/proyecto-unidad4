// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import { } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
import { getFirestore,
    collection,
    doc, 
    addDoc,
    getDoc,
    updateDoc,
    onSnapshot,
    deleteDoc 
    } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
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
export const db = getFirestore();



// funcion del CRUD

export const createTask =  (title, description, userName, date, time) =>  addDoc(collection(db, "tasks"), {title, description, userName, date, time})

export const getTask = id => getDoc(doc(db, "tasks", id));

export const updateTack = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

export const onGetTask = (caliback) => onSnapshot(collection (db, "tasks"), caliback);

export const deleteTask = id =>  deleteDoc(doc(db, "tasks", id));