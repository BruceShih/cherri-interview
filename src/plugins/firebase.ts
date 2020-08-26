import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDT0-GNlFmlkO93zzgLow7U_5KlNYql6aU',
  authDomain: 'cherri-interview.firebaseapp.com',
  databaseURL: 'https://cherri-interview.firebaseio.com',
  projectId: 'cherri-interview',
  storageBucket: 'cherri-interview.appspot.com',
  messagingSenderId: '124960204862',
  appId: '1:124960204862:web:e1136df4525034048dc96f'
};

firebase.initializeApp(firebaseConfig);

// constants
const db = firebase.firestore();
const auth = firebase.auth();

// db collections
const friends = db.collection('friends');
const friendChats = db.collection('friendChats');
const friendNotes = db.collection('friendNotes');
const conversations = db.collection('conversations');

export { db, auth, friends, friendChats, friendNotes, conversations };
