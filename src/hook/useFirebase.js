import { toast } from "react-hot-toast";
import { initializationFirebase, database } from "../firebase/firebase.init";
import { set, ref } from "firebase/database";
import { uid } from "uid";

initializationFirebase();

const useFirebase = () => {
  function writeUserData(name, email) {
    set(ref(database, "users/" + uid()), {
      username: name,
      email: email,
    });
  }
  return {
    writeUserData,
  };
};

export default useFirebase;
