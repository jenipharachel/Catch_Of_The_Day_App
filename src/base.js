import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeqp4YKZQset6NifOuk8enbv5u2URnXA8",
  authDomain: "catch-of-the-day-jen-562bc.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jen-562bc.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export
export default base;
