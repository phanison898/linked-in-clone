import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

// initialize firebaseApp with firebase-config
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebase - Data-Base
const db = firebaseApp.firestore();

// firebase - Storage
const storage = firebase.storage();

// firebase - Auth
const auth = firebase.auth();

// firebase -Auth Provider (Google)
const provider = new firebase.auth.GoogleAuthProvider();

export { storage, auth, provider };

export default db;
