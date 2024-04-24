// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS9tKYGmdDead4CqohWfgQ2aHEIRVOXDE",
  authDomain: "college-chatbot-f5c6c.firebaseapp.com",
  projectId: "college-chatbot-f5c6c",
  storageBucket: "college-chatbot-f5c6c.appspot.com",
  messagingSenderId: "985993442467",
  appId: "1:985993442467:web:db1c760f1a77dd039a7b16",
  measurementId: "G-5XWY9PMGQ1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;