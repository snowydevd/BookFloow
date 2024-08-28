import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjeZTgEFRND_sVbILtheUd4vbOro9BPxc",
  authDomain: "bookfloow.firebaseapp.com",
  projectId: "bookfloow",
  storageBucket: "bookfloow.appspot.com",
  messagingSenderId: "474290144524",
  appId: "1:474290144524:web:b5cc3a54ecdfb3bfac7529",
  measurementId: "G-YET6J5CZ23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
