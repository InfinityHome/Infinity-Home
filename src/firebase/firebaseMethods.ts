import * as Google from 'expo-google-app-auth';
import { Alert } from 'react-native';
import firebase from './config';

 interface Result {
     type: "success";
     accessToken: string | null;
     idToken: string | null;
     refreshToken: string | null;
     user: Google.GoogleUser;
}

 // store google signed in user information into database
 export const onSignIn = (googleUser:Result): any => { 
    // console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            const credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
                );

            // Sign in with credential from the Google user.
            firebase.auth().signInWithCredential(credential)
            .then(function(result) {
                console.log('user siggned in');
                // console.log(result);
                firebase
                .database()
                .ref('/users/' + result.user?.uid)
                .set({
                    userEmail: result.user?.email,
                    userName: result.user?.displayName,
                    userPhone: result.user?.phoneNumber,
                }).then(function (snapshot) {
                    console.log("snapshot: ",snapshot)
                });
            })
            .catch((error) => {
            // error.code, error.message, error.email, error.credential
            Alert.alert("Sonething Went Wrong", error.code)
        });
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
}

   // helper method
function isUserEqual(googleUser:Result, firebaseUser:firebase.User | null) {
    if (firebaseUser) {
        const providerData = firebaseUser.providerData;
        for (let i = 0; i < providerData.length; i++) {
            if (providerData[i]?.providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID && 
                providerData[i]?.uid === googleUser.user.id){
                    // We don't need to reauth the Firebase connection.
                    return true;
            }
        }
    }
    return false;
}