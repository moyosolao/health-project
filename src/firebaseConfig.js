import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgmpK_E9vPdLukVsb6DTPaKrf3iDb0LN4",
  authDomain: "seconddemo-5d09c.firebaseapp.com",
  projectId: "seconddemo-5d09c",
  storageBucket: "seconddemo-5d09c.appspot.com",
  messagingSenderId: "62024665938",
  appId: "1:62024665938:web:074db7ecba3d9efb9cc88b",
  measurementId: "G-V51M9SLXQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);