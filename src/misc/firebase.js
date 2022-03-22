import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
apiKey: "AIzaSyCNQ63IydOiWgvsUS2zrl6YykFbmIbG3tE",
  authDomain: "chat-app-950a6.firebaseapp.com",
  databaseURL: "https://chat-app-950a6-default-rtdb.firebaseio.com",
  projectId: "chat-app-950a6",
  storageBucket: "chat-app-950a6.appspot.com",
  messagingSenderId: "297867786190",
  appId: "1:297867786190:web:4e6d113bbefac417c51d9f"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(
    'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw'
  );

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useFunctionsEmulator('http://localhost:5001');
}
