import firebase from 'firebase';


const config = {
    // Firebase Config Here
    apiKey: "AIzaSyAtkmGaJyKnQjcgFUwazY5m1JCUUxzNJnA",
    authDomain: "testing-project-4e870.firebaseapp.com",
    databaseURL: "https://testing-project-4e870.firebaseio.com",
    projectId: "testing-project-4e870",
    storageBucket: "testing-project-4e870.appspot.com",
    messagingSenderId: "368496104785",
    appId: "1:368496104785:web:2d6d1ddc410f1c648c2f70"
};

firebase.initializeApp(config);

export function firebaseListener(func) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            func(true, user);
        } else {
            func(false);
        }
    }, function(error) {
        console.log(error);
    });
}
const firestore = firebase.firestore();

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const db = firestore;
