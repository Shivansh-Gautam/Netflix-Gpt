// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkS2reP8VK8wze3o3hPTVoCwWmaEMEWzA",
  authDomain: "netflixgpt-39449.firebaseapp.com",
  projectId: "netflixgpt-39449",
  storageBucket: "netflixgpt-39449.firebasestorage.app",
  messagingSenderId: "1091299518493",
  appId: "1:1091299518493:web:be98b0765e5ac4acc57ef4",
  measurementId: "G-CN1TTK5XM4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
