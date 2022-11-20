// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo3S0KTymo1kZyTCaeVKhBsT2zIxQhyZ4",
  authDomain: "hackathon-adf00.firebaseapp.com",
  databaseURL: "https://hackathon-adf00-default-rtdb.firebaseio.com",
  projectId: "hackathon-adf00",
  storageBucket: "hackathon-adf00.appspot.com",
  messagingSenderId: "291407691989",
  appId: "1:291407691989:web:9e4d9dbe2825465a07e25c",
  measurementId: "G-QJ28P3SR0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;