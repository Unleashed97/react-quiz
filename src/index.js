import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyD2n3gJ53eYszWuNrpH0C8Pck6Z-cgDgcA",
  authDomain: "react-quiz-c4e65.firebaseapp.com",
  projectId: "react-quiz-c4e65",
  storageBucket: "react-quiz-c4e65.appspot.com",
  messagingSenderId: "257088515791",
  appId: "1:257088515791:web:bac9450cbffd8bfae511ba"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);