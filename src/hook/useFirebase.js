import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import initializationFirebase from "../firebase/firebase.init";

initializationFirebase();

const useFirebase = () => {
  return {};
};

export default useFirebase;
