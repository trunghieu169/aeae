import Firebase from './node_modules/firebase';
let config = {
apiKey: "<AIzaSyCo1X_ihUYoEiTzSsiMqTQIEcTI76LHeAQ>",
authDomain: "<acac-a1f59.firebaseapp.com>",
databaseURL: "<https://acac-a1f59.firebaseio.com>",
projectId: "<acac-a1f59>",
storageBucket: "<acac-a1f59.appspot.com>",
messagingSenderId: "<812940231149>"
};
let app = Firebase.initializeApp(config);
export const db = app.database();