import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: 'AIzaSyBzlSJcgA_IgVlPBInOz1fRtGeM8-Qv29U',
  authDomain: 'tunicata-web.firebaseapp.com',
  databaseURL: 'https://tunicata-web-default-rtdb.firebaseio.com',
  projectId: 'tunicata-web',
  storageBucket: 'tunicata-web.appspot.com',
  messagingSenderId: '803433107094',
  appId: '1:803433107094:web:076085692d4d0f141f7cb7'
};

var app = firebase.initializeApp(firebaseConfig);

const db = app.database();
const storage = app.storage();
const auth = app.auth();
const autorization = app.auth;
const firebaseUi = new firebaseui.auth.AuthUI(firebase.auth()); // UI login by firebase

export { db, storage, auth, autorization, firebaseUi, firebase as default };
