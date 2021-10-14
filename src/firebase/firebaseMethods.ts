import * as Google from 'expo-google-app-auth';
import { Alert } from 'react-native';
import {authMethod, firebase} from './config';
import { database } from './firebaseDB';

 interface Result {
     type: "success";
     accessToken: string | null;
     idToken: string | null;
     refreshToken: string | null;
     user: Google.GoogleUser;
}

 // store google signed in user information into database
 export const onSignIn = (googleUser:Result): void => {
    // console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = authMethod.onAuthStateChanged((firebaseUser) => {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
            // Build Firebase credential with the Google ID token.
            const credential = firebase.auth.GoogleAuthProvider.credential(
                googleUser.idToken,
                googleUser.accessToken
                );

            // Sign in with credential from the Google user.
            authMethod.signInWithCredential(credential)
            .then((userInfo) => {
                if(userInfo.additionalUserInfo?.isNewUser)
                {
                    database.updateUserObject(
                        {
                            userID: userInfo.user?.uid,
                            userEmail: userInfo.user?.email,
                            userName: userInfo.user?.displayName,
                            userPhone: userInfo.user?.phoneNumber,
                            userAddress: {
                                street: "",
                                city: "",
                                state: "",
                                zip: "",
                            }
                        }
                    )
                }
            })
            .catch((error) => {
            Alert.alert("Sonething Went Wrong", error.code)
        });
        } else {
            console.log('User already signed-in Firebase.');
        }
    });
}

   // helper method
const isUserEqual = (googleUser:Result, firebaseUser:firebase.User | null):boolean => {
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