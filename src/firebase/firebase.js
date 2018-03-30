import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBkOh3VxQideB6jq3naWdBSV6QxLxeN6Uo',
  authDomain: 'training-integrato.firebaseapp.com',
  databaseURL: 'https://training-integrato.firebaseio.com',
  projectId: 'training-integrato',
  storageBucket: 'training-integrato.appspot.com',
  messagingSenderId: '323414795114'
};

firebase.initializeApp(config);

const database = firebase.database();
const auth= firebase.auth();

export { firebase, auth, database as default };

