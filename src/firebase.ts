// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyaEAUtzU4plvChu4yITNBV6Y2soo_Zo0",
  authDomain: "inmogrdate.firebaseapp.com",
  projectId: "inmogrdate",
  storageBucket: "inmogrdate.appspot.com",
  messagingSenderId: "624409246318",
  appId: "1:624409246318:web:ceae017bccf8ad3fb3847f",
  measurementId: "G-PZEYZ089WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);