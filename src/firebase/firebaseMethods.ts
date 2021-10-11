import * as Google from 'expo-google-app-auth';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { authMethod, firebase } from './config';

interface Result {
  type: 'success';
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
  user: Google.GoogleUser;
}

// store google signed in user information into database
export const onSignIn = (googleUser: Result): void => {
  const dispatch = useDispatch();
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
      authMethod
        .signInWithCredential(credential)
        .then((result) => {
          console.log('user siggned in');
          if (result.additionalUserInfo?.isNewUser) {
            console.log(result);
            firebase
              .database()
              .ref('/users/' + result.user?.uid)
              .set({
                userEmail: result.user?.email,
                userName: result.user?.displayName,
                userPhone: result.user?.phoneNumber,
              })
              .then((snapshot) => {
                console.log('snapshot: ', snapshot);
              });
            dispatch({
              type: 'LOGIN_USER',
              payload: {
                userName: result.user?.displayName,
                userEmail: result.user?.email,
                userPhone: result.user?.phoneNumber,
              },
            });
          }
        })
        .catch((error) => {
          // error.code, error.message, error.email, error.credential
          Alert.alert('Sonething Went Wrong', error.code);
        });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
};

// helper method
const isUserEqual = (
  googleUser: Result,
  firebaseUser: firebase.User | null
): boolean => {
  if (firebaseUser) {
    const providerData = firebaseUser.providerData;
    for (let i = 0; i < providerData.length; i++) {
      if (
        providerData[i]?.providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i]?.uid === googleUser.user.id
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};
