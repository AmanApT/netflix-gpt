// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvUUlaX-34kDR12jg2hUnKW-x7-MHok2c",
  authDomain: "netflixgpt-bd1ae.firebaseapp.com",
  projectId: "netflixgpt-bd1ae",
  storageBucket: "netflixgpt-bd1ae.appspot.com",
  messagingSenderId: "477976630019",
  appId: "1:477976630019:web:1cb615be3b82a7440dcf36",
  measurementId: "G-YQYX2E3R0Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// Using getAuth automatically configures the project
