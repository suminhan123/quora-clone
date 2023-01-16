import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4Pf0rCDz6YH0wgQ9-GI_0rwZWJkaWBQQ",
    authDomain: "quora-clone-d599d.firebaseapp.com",
    projectId: "quora-clone-d599d",
    storageBucket: "quora-clone-d599d.appspot.com",
    messagingSenderId: "873442014253",
    appId: "1:873442014253:web:ae6174efdf53cd2c05f4a4",
    measurementId: "G-LTXQZNL2HF"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider};
export default db;