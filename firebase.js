import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ_uQz4MsnKmB_00cTlYrrZzcqc-BYhP8",
  authDomain: "task-7-1p-5f69b.firebaseapp.com",
  projectId: "task-7-1p-5f69b",
  storageBucket: "task-7-1p-5f69b.appspot.com",
  messagingSenderId: "166758937274",
  appId: "1:166758937274:web:e90dd17949c720eb37c883"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db }; 