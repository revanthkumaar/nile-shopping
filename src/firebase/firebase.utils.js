//import firebase dependencies or modules
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//get the config from firebase app on the cloud server
var config = {
    apiKey: "AIzaSyBx4vN9Xw974R7oadCqpjZNHHI9UzqWoHA",
    authDomain: "crwn-db-24119.firebaseapp.com",
    projectId: "crwn-db-24119",
    storageBucket: "crwn-db-24119.appspot.com",
    messagingSenderId: "492740632298",
    appId: "1:492740632298:web:4aeeaeaf8db726522b0193",
    measurementId: "G-1299T52Z43"
  };


export const createUserProfileDocument = async(userAuth,additionalData) => {
  console.log('userAuth in frebase.utils'+userAuth);
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log('snapshot status'+snapShot.exists)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log('after the response:  : : '+displayName);
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
}







  //initializeApp is a function to establish connection
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
//function that performs the signin
export const signInWithGoogle= () => auth.signInWithPopup(provider);
export default firebase;



