import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

import constant from '../common/constant';

var firebaseConfig = {
  apiKey: constant.apiKey,
  authDomain: constant.authDomain,
  databaseURL: constant.databaseURL,
  projectId: constant.projectId,
  storageBucket: constant.storageBucket,
  messagingSenderId: constant.messagingSenderId,
  appId: constant.appId,
  measurementId: constant.measurementId,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;