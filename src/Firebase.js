// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3zPuEWY8JZ8slWeqbLQSjyAd7D6iDlWY",
    authDomain: "streaks-8d8c9.firebaseapp.com",
    projectId: "streaks-8d8c9",
    storageBucket: "streaks-8d8c9.appspot.com",
    messagingSenderId: "575245572929",
    appId: "1:575245572929:web:4bf954844b9a923657dfc0",
    measurementId: "G-16YKWPTZMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            localStorage.setItem("streaksuserz6527", user.photoURL);
            localStorage.setItem("streaksmailz6527", user.email);
            localStorage.setItem("streaksnamez6527", user.displayName);
            console.log(user);
            window.location.reload();

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });
}

export const db = getFirestore();