import { initializeApp, FirebaseApp } from "firebase/app";

import { getDatabase, Database } from "firebase/database";

// Define the configuration for your app - the types here are inferred
const firebaseConfig = {
  apiKey: "AIzaSyDpPuITTDAXymL2UCcisK-nGdAAU0",
  authDomain: "fe23-slutprojekt-userdb.firebaseapp.com",
  projectId: "fe23-slutprojekt-userdb",
  databaseURL:
    "https://fe23-slutprojekt-userdb-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "fe23-slutprojekt-userdb.appspot.com",
  messagingSenderId: "1056096098177",
  appId: "1:1056096098177:web:716d9daa8907b6bb1d7a80",
  measurementId: "G-SJNLBSDKQ7",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const db: Database = getDatabase(app);
