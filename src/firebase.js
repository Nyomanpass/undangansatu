import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZPDZdL52g6-AmzYTbIwdXK4j-7lddgfg",
    authDomain: "wedding-guestbook-8fb9a.firebaseapp.com",
    projectId: "wedding-guestbook-8fb9a",
    storageBucket: "wedding-guestbook-8fb9a.firebasestorage.app",
    messagingSenderId: "31181140918",
    appId: "1:31181140918:web:c2c2313bf8467797a14717",
    measurementId: "G-PH8Z4DDRW1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
