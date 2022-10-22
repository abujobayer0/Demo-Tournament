import { toast } from "react-hot-toast";
import { initializationFirebase, database } from "../firebase/firebase.init";
import { set, ref, onValue } from "firebase/database";
import { uid } from "uid";
import { useEffect, useState } from "react";

initializationFirebase();

const useFirebase = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    onValue(ref(database), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setUsersData([]);
        Object.values(data).map((user) => {
          const database = Object.keys(user).map((index) => {
            let person = user[index];
            return person;
          });
          setUsersData(database);
        });
      }
    });
  }, []);

  const writeUserData = (formData, callBack) => {
    set(ref(database, "users/" + uid()), {
      ...formData,
    })
      .then(() => {
        callBack("");
      })
      .catch((err) => {
        console.log("writeUserData error:" + err);
      });
  };
  return {
    writeUserData,
    usersData,
  };
};

export default useFirebase;
