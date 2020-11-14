import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyCvHXu2yU4Vn3McJLrtJpP_WXdvxR2maJM",
  authDomain: "olx-clone-cdc0e.firebaseapp.com",
  databaseURL: "https://olx-clone-cdc0e.firebaseio.com",
  projectId: "olx-clone-cdc0e",
  storageBucket: "olx-clone-cdc0e.appspot.com",
  messagingSenderId: "1096841785602",
  appId: "1:1096841785602:web:20c7af6a1f5b5781ee921b",
  measurementId: "G-KXFPKZ8ZC4"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
