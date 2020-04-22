import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCocJ5N4hY1tvSNV3lZ9v-Ui3tQH08ryNU",
    authDomain: "gds-myanmar-master-b2987.firebaseapp.com",
    databaseURL: "https://gds-myanmar-master-b2987.firebaseio.com",
    projectId: "gds-myanmar-master-b2987",
    storageBucket: "gds-myanmar-master-b2987.appspot.com",
    messagingSenderId: "337530820585",
    appId: "1:337530820585:web:15b97e2d3d8f6659655d78"
  };
  
 const fire = firebase.initializeApp(firebaseConfig);

export default fire;