import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzlSJcgA_IgVlPBInOz1fRtGeM8-Qv29U",
  authDomain: "tunicata-web.firebaseapp.com",
  projectId: "tunicata-web",
  storageBucket: "tunicata-web.appspot.com",
  messagingSenderId: "803433107094",
  appId: "1:803433107094:web:076085692d4d0f141f7cb7"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
