import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
var config={
    apiKey: "AIzaSyCvZB7VPetZOoi2OTD48ZNLQxE6qGvJ1fw",
    authDomain: "graphqlproject-5f8ed.firebaseapp.com",
    databaseURL: "https://graphqlproject-5f8ed.firebaseio.com",
    projectId: "graphqlproject-5f8ed",
    storageBucket: "graphqlproject-5f8ed.appspot.com",
    messagingSenderId: "703452493122",
    appId: "1:703452493122:web:8a54bcda200d6cb61204db",
    measurementId: "G-3G8TG5TWZ5"
  };

  export const createUserProfileDocument= async (userAuth, addtionalDetails )=>{
    if(!userAuth)return
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const{displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,createdAt,
          ...addtionalDetails
        })

      }
      catch(err){
        console.log("error creating user",err.message);
      }

    }
    return userRef
  }
  firebase.initializeApp(config);

  export const auth=firebase.default.auth();
  //console.log(auth);
  const firestore=firebase.firestore();
  //console.log(firestore)
   const provider=new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({prompt:'select_account'});
   export const signInWithGoogle=()=>{
    
    return  auth.signInWithPopup(provider);
    }
  
  export default firebase;