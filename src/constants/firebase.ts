import firebase from "firebase";
import { FIREBASE_KEY, FIREBASE_DOMAIN, FIREBASE_DATABASE, 
  FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID} from "@env";

// Contains Global Configurations
const firebaseConfig = {
    apiKey: FIREBASE_KEY,
    authDomain: FIREBASE_DOMAIN,
    databaseURL: FIREBASE_DATABASE,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
// const auth = firebase.auth();
// export default auth;