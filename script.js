import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0i_06l0wqKyk05N5AgZBtl8c461QZAgg",
  authDomain: "elitetask-pro.firebaseapp.com",
  projectId: "elitetask-pro",
  storageBucket: "elitetask-pro.firebasestorage.app",
  messagingSenderId: "504295275402",
  appId: "1:504295275402:web:cf744a5d4e82c72145a673"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);