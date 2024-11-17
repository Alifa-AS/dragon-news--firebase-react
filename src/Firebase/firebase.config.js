// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlfMRtA_hX977_G5rGELbMEVBu-BOMAgY",
  authDomain: "dragon-news-ae7f1.firebaseapp.com",
  projectId: "dragon-news-ae7f1",
  storageBucket: "dragon-news-ae7f1.firebasestorage.app",
  messagingSenderId: "168098066600",
  appId: "1:168098066600:web:d784a970c3f325727e529d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;