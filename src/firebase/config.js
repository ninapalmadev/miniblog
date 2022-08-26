import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuRuiinDlKbBkbIfyt7Mbpuu_3SzziatU",
  authDomain: "miniblog-66ec7.firebaseapp.com",
  projectId: "miniblog-66ec7",
  storageBucket: "miniblog-66ec7.appspot.com",
  messagingSenderId: "140839897260",
  appId: "1:140839897260:web:d62ebdda4f5c0f9f953709",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
