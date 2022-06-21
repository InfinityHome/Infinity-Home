import { Alert } from "react-native";
import * as Google from "expo-google-app-auth";
import { googleConfig } from "../firebase/config";
import { authMethod, firebase } from "./config";
import { database } from "./firebaseDB";

type ResultType = {
  type: "success";
  accessToken: string | null;
  idToken: string | null;
  refreshToken: string | null;
  user: Google.GoogleUser;
};
export const signInWithGoogleAsync = (): void => {
  Google.logInAsync(googleConfig)
    .then((result) => {
      if (result.type === "success") {
        onGoogleSignIn(result);
      }
    })
    .catch((error) => {
      Alert.alert("Something went wrong: ", error.message);
    });
};

// store google signed in user information into database
const onGoogleSignIn = (googleUser: ResultType): void => {
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
        .then((userInfo) => {
          if (userInfo.additionalUserInfo?.isNewUser) {
            database.updateUserObject({
              userID: userInfo.user?.uid,
              userEmail: userInfo.user?.email,
              userName: userInfo.user?.displayName,
              userPhone: userInfo.user?.phoneNumber,
              userAddress: {
                street: "",
                city: "",
                state: "",
                zip: "",
              },
            });
          }
        })
        .catch((error) => {
          Alert.alert("Sonething Went Wrong", error.code);
        });
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
};

// helper method
const isUserEqual = (
  googleUser: ResultType,
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

// sign in existing user
export const onSignin = (email: string, password: string): void => {
  authMethod.signInWithEmailAndPassword(email, password).catch((error) => {
    switch (error.code) {
      case "auth/wrong-password":
        Alert.alert("Oops", "Wrong Password", [{ text: "Try Again" }]);
        break;
      case "auth/user-not-found":
        Alert.alert("Sorry", "User does not exist", [
          { text: "Cancel" },
          {
            text: "Sign Up",
          },
        ]);
        break;
      default:
        Alert.alert("Error", "Something Went Wrong", [{ text: "Try Again" }]);
        break;
    }
  });
};

// sign up new user
export const onSignUp = (
  name: string,
  email: string,
  password: string,
  phone: string
): void => {
  authMethod
    .createUserWithEmailAndPassword(email, password)
    .then(({ user }) => {
      database.updateUserObject({
        userID: user?.uid,
        userEmail: email,
        userName: name,
        userPhone: phone,
        userAddress: {
          street: "",
          city: "",
          state: "",
          zip: "",
        },
      });
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        Alert.alert("Oops", "Email Taken", [{ text: "Try Again" }]);
      } else {
        Alert.alert("Error", "Something Went Wrong", [{ text: "Try Again" }]);
      }
    });
};

export const handleSignOut = (): void => {
  authMethod.signOut().catch((error) => {
    console.log(error);
  });
};
