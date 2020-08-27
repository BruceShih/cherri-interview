import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// TODO: use your firebase config here
const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

// constants
const db = firebase.firestore();
const auth = firebase.auth();

db.enablePersistence();

// db collections
const friends = db.collection('friends');
const friendChats = db.collection('friendChats');
const friendNotes = db.collection('friendNotes');
const conversations = db.collection('conversations');

export { db, auth, friends, friendChats, friendNotes, conversations };
