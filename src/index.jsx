import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyDrtj71l3VbmET1bKGtekAsifVzRlUmgHU',
  authDomain: 'dininginformate.firebaseapp.com',
  databaseURL: 'https://dininginformate.firebaseio.com',
  projectId: 'dininginformate',
  storageBucket: 'dininginformate.appspot.com'
  // messagingSenderId: "sender-id",
  // appID: "app-id",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// console.log(db);
export async function getWaitTimes() {
  const waitTimes = collection(db, 'Waiting Times');
  const waitSnapshot = await getDocs(waitTimes);
  // console.log({waitSnapshot})
  const waitList = waitSnapshot.docs.map((doc) => doc.data());
  // console.log({waitList})
  return waitList;
}

export async function getDiningHallInfo() {
  const diningData = collection(db, 'Dining Halls');
  const diningSnapshot = await getDocs(diningData);
  // console.log({waitSnapshot})
  const diningList = diningSnapshot.docs.map((doc) => doc.data());
  // console.log({diningList})
  return diningList;
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
