import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: 'plant-logs.firebaseapp.com',
  databaseURL: 'https://plant-logs.firebaseio.com',
  projectId: 'plant-logs',
  storageBucket: 'plant-logs.appspot.com',
  messagingSenderId: '675384333099'
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
