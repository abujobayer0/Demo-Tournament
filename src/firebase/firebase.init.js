import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initializationFirebase = () => {
  getAnalytics(app);
};
const database = getDatabase(app);

export { initializationFirebase, database };
