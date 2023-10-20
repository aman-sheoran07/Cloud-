// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlk45tfaxVqDjKE155NEGkLoSQxl8fPKc",
  authDomain: "e-commerce-site-a5b2e.firebaseapp.com",
  projectId: "e-commerce-site-a5b2e",
  storageBucket: "e-commerce-site-a5b2e.appspot.com",
  messagingSenderId: "441962975620",
  appId: "1:441962975620:web:98118467d9009f78ff8dd1",
  measurementId: "G-TKFF2BSBX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);