 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCv3WQFj_QNRfiKYA8JKLyCDGrBYrvGZaU",
  authDomain: "nextjs-a09d6.firebaseapp.com",
  projectId: "nextjs-a09d6",
  storageBucket: "nextjs-a09d6.appspot.com",
  messagingSenderId: "163117406090",
  appId: "1:163117406090:web:4b6679d5c548c01112da73",
  measurementId: "G-HP0ZFDJXCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};