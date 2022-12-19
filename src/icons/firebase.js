// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default function Firebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyBnSdA8aDaMgRcv5Pcj5z0kOm3uuUlqoNY",

    authDomain: "company-directory-8fbd0.firebaseapp.com",

    projectId: "company-directory-8fbd0",

    storageBucket: "company-directory-8fbd0.appspot.com",

    messagingSenderId: "75135700027",

    appId: "1:75135700027:web:4b2149c4c8bc116adc601e",

    measurementId: "G-D5349WQYV4",
  };

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  db.collection("Employees")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });

  return <div>firebase</div>;
}
