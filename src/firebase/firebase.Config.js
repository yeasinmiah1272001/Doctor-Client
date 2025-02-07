import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCReLa5rGgwS6RiP5V-qKTUj7N6HT_fIaE",
  authDomain: "doctor-appointment-91c47.firebaseapp.com",
  projectId: "doctor-appointment-91c47",
  storageBucket: "doctor-appointment-91c47.firebasestorage.app",
  messagingSenderId: "231320440798",
  appId: "1:231320440798:web:7ebd1ae508cfd1e162174f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
