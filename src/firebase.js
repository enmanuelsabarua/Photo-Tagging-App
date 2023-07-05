import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFJa-kiv4HC5m5f8KLVGBYkwz56RB6AqI",
    authDomain: "findthecharacters-1db17.firebaseapp.com",
    projectId: "findthecharacters-1db17",
    storageBucket: "findthecharacters-1db17.appspot.com",
    messagingSenderId: "876588522834",
    appId: "1:876588522834:web:f6210dc7a8cf9f58aaae8b"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
