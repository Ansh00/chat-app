/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: "AIzaSyCNQ63IydOiWgvsUS2zrl6YykFbmIbG3tE",
  authDomain: "chat-app-950a6.firebaseapp.com",
  databaseURL: "https://chat-app-950a6-default-rtdb.firebaseio.com",
  projectId: "chat-app-950a6",
  storageBucket: "chat-app-950a6.appspot.com",
  messagingSenderId: "297867786190",
  appId: "1:297867786190:web:4e6d113bbefac417c51d9f",
});

firebase.messaging();
