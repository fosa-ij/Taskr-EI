import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7H6IRHk_skxacOmAdW83N8LvHy781Qbc",
  authDomain: "taskr-981e4.firebaseapp.com",
  projectId: "taskr-981e4",
  storageBucket: "taskr-981e4.appspot.com",
  messagingSenderId: "167145746938",
  appId: "1:167145746938:web:820bbb8ad95fa7b5fb3443",
  measurementId: "G-81ZHBEE1VD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
