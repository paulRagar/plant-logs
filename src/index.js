import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker'

const config = {
  apiKey: 'AIzaSyBEZ-79l3cvIr1JFvKlv2_-but_GDSOE6Q',
  authDomain: 'plant-logs.firebaseapp.com',
  databaseURL: 'https://plant-logs.firebaseio.com',
  projectId: 'plant-logs',
  storageBucket: 'plant-logs.appspot.com',
  messagingSenderId: '675384333099'
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
