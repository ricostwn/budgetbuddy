// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIV8liMyzEEEygroj_WLsC4F-qPVHnVhA",
  authDomain: "budgetbuddy-c011b.firebaseapp.com",
  projectId: "budgetbuddy-c011b",
  storageBucket: "budgetbuddy-c011b.firebasestorage.app",
  messagingSenderId: "1055518055046",
  appId: "1:1055518055046:web:1d0908a579020e405f4f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

//database
export const firestore = getFirestore(app);