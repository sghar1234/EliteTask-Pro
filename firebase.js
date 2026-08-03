import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0i_06l0wqKyk05N5AgZBtl8c461QZAgg",
  authDomain: "elitetask-pro.firebaseapp.com",
  projectId: "elitetask-pro",
  storageBucket: "elitetask-pro.firebasestorage.app",
  messagingSenderId: "504295275402",
  appId: "1:504295275402:web:8c480445c5510fa645a673"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);