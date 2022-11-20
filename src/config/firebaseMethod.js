import app from "./firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const auth = getAuth(app);
const database = getDatabase(app);

let signUpUser = (obj) => {
  let { email, password, userName, contact } = obj;
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const refrence = ref(database, `user/${user.uid}`);
        obj.id = user.uid;
        set(refrence, obj)
          .then(() => {
            resolve("User Created");
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

let loginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const refrence = ref(database, `user/${user.uid}`);
        onValue(refrence, (e) => {
          let status = e.exists();
          console.log(status);
          if (status) {
            resolve(e.val());
          } else {
            reject("data not found");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });
};

let checkUser = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        resolve(uid);
      } else {
        reject("No user login...");
      }
    });
  });
};

let sendData = (obj, nodeName, id) => {
  let postListRef;
  return new Promise((resolve, reject) => {
    if (id) {
      postListRef = ref(database, `${nodeName}/${id}`);
    } else {
      let addref = ref(database, nodeName);
      obj.id = push(addref).key;
      postListRef = ref(database, `${nodeName}/${obj.id}`);
    }
    set(postListRef, obj)
      .then(() => {
        resolve(`dataSend SuccesFully ${nodeName}/${obj.id}`);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

let getData = (nodeName, id) => {
  let refrence = ref(database, `${nodeName}/${id ? id : ""}`);
  return new Promise((resolve, reject) => {
    onValue(
      refrence,
      (snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          if (id) {
            resolve(data);
          } else {
            let arr = Object.values(data);
            resolve(arr);
          }
        }
      },
      {
        onlyOnce: false,
      }
    );
  });
};
export { signUpUser, loginUser, checkUser, sendData, getData };
