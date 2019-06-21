import firebase from 'firebase';

const config = {
     apiKey: "AIzaSyDJThgmegACnvt9w8GY1o8WZRaxIda8b6g",
     authDomain: "devtocho.firebaseapp.com",
     databaseURL: "https://devtocho.firebaseio.com",
     projectId: "devtocho",
     storageBucket: "devtocho.appspot.com",
     messagingSenderId: "1083343279792",
     appId: "1:1083343279792:web:d94ea998c2976dc0"
}
const firebaseApp = firebase.initializeApp(config);

export default  firebaseApp;