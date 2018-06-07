import React from 'react';
import ReactDOM from 'react-dom';
import BasicRouting from './config/routes';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAQ-Y3WJZYynrCw6gKVy56IdrCNUkQMJnw",
  authDomain: "auth-3ac4d.firebaseapp.com",
  databaseURL: "https://auth-3ac4d.firebaseio.com",
  projectId: "auth-3ac4d",
  storageBucket: "auth-3ac4d.appspot.com",
  messagingSenderId: "26226103942"
};
firebase.initializeApp(config);

ReactDOM.render( <Provider store={store}>
    <BasicRouting />
  </Provider>, document.getElementById('root'));
registerServiceWorker();