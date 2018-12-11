  // Initialize Firebase
  import firebase from 'firebase/app';
  import 'firebase/app';
  import 'firebase/database';
  import 'firebase/firestore';


  console.log('firebase initialized!');




  // firebase config
  const config = {
    apiKey: "AIzaSyAD0sXsl3KfWVsIJ8a6FsIlaFQGURsW_9I",
    authDomain: "cloud-cafe-b71e5.firebaseapp.com",
    databaseURL: "https://cloud-cafe-b71e5.firebaseio.com",
    projectId: "cloud-cafe-b71e5",
    storageBucket: "cloud-cafe-b71e5.appspot.com",
    messagingSenderId: "801316976514"
  };

// init firebase
firebase.initializeApp(config);

// store db here.
const db = firebase.firestore();
// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
  });


const firebaseCafe = db.collection("cafes");

// reference
        // firebaseCafe.get().then( (snapshot)=>{
        //     snapshot.docs.forEach(doc =>{
        //         console.log(doc.data())  
        //     })
        // });

export {
    firebase,
    firebaseCafe
} ;