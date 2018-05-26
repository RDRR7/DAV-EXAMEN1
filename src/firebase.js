import firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDlnYcFfgtIQEAzsNi5JJuDGpKTyvt3NhA',
	authDomain: 'examen-1-bf208.firebaseapp.com',
	databaseURL: 'https://examen-1-bf208.firebaseio.com',
	projectId: 'examen-1-bf208',
	storageBucket: 'examen-1-bf208.appspot.com',
	messagingSenderId: '942232581185',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
