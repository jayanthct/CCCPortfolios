// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw7Rzgo_1UOzFawMCcvukAMoZ28fuzWbA",
  authDomain: "ccc-portfolios.firebaseapp.com",
  projectId: "ccc-portfolios",
  storageBucket: "ccc-portfolios.firebasestorage.app",
  messagingSenderId: "1036690138777",
  appId: "1:1036690138777:web:c012f6c4fabb887c153a08",
  measurementId: "G-MSE71G5YNK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
