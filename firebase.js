import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// COLAR AQUI A STRING DE CONEXÃO
const firebaseConfig = {
     apiKey: "AIzaSyBrcDJQeaBcIiMstaGJWFH7kRVwxdEx4ng",
  authDomain: "erika7info.firebaseapp.com",
  projectId: "erika7info",
  storageBucket: "erika7info.firebasestorage.app",
  messagingSenderId: "301493939512",
  appId: "1:301493939512:web:66f139e8d77070eade65cd",
  measurementId: "G-R39YVBQPEN"
};
  
  
// INICIALIZAR O FIREBASE
let app;
if (firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export { auth, firestore, storage };