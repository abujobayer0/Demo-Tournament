import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const initializationFirebase = () => {
  getAnalytics(app);
};

export default initializationFirebase;
