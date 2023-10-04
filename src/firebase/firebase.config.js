// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Jo2QLTf-bouWE3nOHpbj1RQXUMgVI1M",
  authDomain: "react-dragon-news-auth-c05ab.firebaseapp.com",
  projectId: "react-dragon-news-auth-c05ab",
  storageBucket: "react-dragon-news-auth-c05ab.appspot.com",
  messagingSenderId: "648145551671",
  appId: "1:648145551671:web:bbb53eda8d8281d80d1ab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app