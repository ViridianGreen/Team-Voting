import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBJOEA09m3DTsrxSy7tb3V2wOjxcVpa4y4",
    authDomain: "pro67-e5b7c.firebaseapp.com",
    projectId: "pro67-e5b7c",
    storageBucket: "pro67-e5b7c.appspot.com",
    messagingSenderId: "131675188529",
    appId: "1:131675188529:web:c1ff3f7b9b293aa7345410",
    measurementId: "G-0NB34XW2EJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();

