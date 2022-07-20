import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDsAiysK-wA0EKuTHDAN4IXyToov4YEPys",
  authDomain: "skill-up-c4de2.firebaseapp.com",
  projectId: "skill-up-c4de2",
  storageBucket: "skill-up-c4de2.appspot.com",
  messagingSenderId: "859425294093",
  appId: "1:859425294093:web:2386a1369930ec9f1f5244",
  measurementId: "G-5F8QFY9H41"
};

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage}
  export default db;