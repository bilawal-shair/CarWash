/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import  firebase  from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

// Your Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyDXLSgSFLzRswz31r2mSeiG9gBVZbdJGbs',
  authDomain: 'AIzaSyDXLSgSFLzRswz31r2mSeiG9gBVZbdJGbs',
  projectId: 'car-wash-f8fac',
  storageBucket: 'car-wash-f8fac.appspot.com',   
  messagingSenderId: '174663214525',
  appId: '1:858887148300:android:97bf4425628d8b09096f29',
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


AppRegistry.registerComponent(appName, () => App);
