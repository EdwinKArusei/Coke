import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAlmx68pXGBpVSfMMfQslDFxMEP6qGWJhw",
  authDomain: "coke-969f6.firebaseapp.com",
  projectId: "coke-969f6",
  storageBucket: "coke-969f6.appspot.com",
  messagingSenderId: "760911088797",
  appId: "1:760911088797:web:e1faaae25d79c3dc965874",
  measurementId: "G-DD0918P5VW",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
