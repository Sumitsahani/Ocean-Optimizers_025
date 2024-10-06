// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbELdl25N5Zqbq2hCUdE2HosGyt9FmmQA",
  authDomain: "crudoperations-9b3d9.firebaseapp.com",
  databaseURL: "https://crudoperations-9b3d9-default-rtdb.firebaseio.com",
  projectId: "crudoperations-9b3d9",
  storageBucket: "crudoperations-9b3d9.appspot.com",
  messagingSenderId: "1093651335294",
  appId: "1:1093651335294:web:9d5d2e00451ff0e1d7702f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;







