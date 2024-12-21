import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk8NWqa8wiUVpWBGqVQWQU6ZH_oEcolIc",
  authDomain: "job-finder-2205f.firebaseapp.com",
  projectId: "job-finder-2205f",
  storageBucket: "job-finder-2205f.appspot.com",
  messagingSenderId: "1061349187563",
  appId: "1:1061349187563:web:03ce37a251720f1ae0c3ae",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export firebaseConfig for debugging or reuse
export { firebaseConfig, auth, db, storage };
