import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { getLatestWaitTimeForHalls } from './helpers';

const firebaseConfig = {
  apiKey: 'AIzaSyDrtj71l3VbmET1bKGtekAsifVzRlUmgHU',
  authDomain: 'dininginformate.firebaseapp.com',
  databaseURL: 'https://dininginformate-default-rtdb.firebaseio.com',
  projectId: 'dininginformate',
  storageBucket: 'dininginformate.appspot.com',
  messagingSenderId: '1060468020333',
  appId: '1:1060468020333:web:c01879a1caf592d703db64',
  measurementId: 'G-J40KDS27KG'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// console.log(db);
export async function getWaitTimes() {
  const waitTimes = collection(db, 'Waiting Times');
  const waitQuery = await query(waitTimes, orderBy('Timestamp', 'asc'));
  const waitSnapshot = await getDocs(waitQuery);
  // console.log({waitSnapshot})
  const waitList = waitSnapshot.docs.map((doc) => doc.data());
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

export const streamWaitTimes = (snapshot, error) => {
  const itemsColRef = collection(db, 'Waiting Times');
  const waitQuery = query(itemsColRef, orderBy('Timestamp', 'asc'));
  return onSnapshot(waitQuery, snapshot, error);
};

export async function submitForm(diningHallId, waitTime) {
  try {
    const docRef = await addDoc(collection(db, 'Waiting Times'), {
      'Dining Hall Id': diningHallId,
      'Wait Time': waitTime,
      Timestamp: Timestamp.now()
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
  return 0;
}

export const useDbData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = streamWaitTimes(
      (querySnapshot) => {
        const updatedWaitTimes = querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
        setData(getLatestWaitTimeForHalls(updatedWaitTimes));
      },
      () => setError('Failed to get wait times')
    );
    return unsubscribe;
  }, []);

  return [data, error];
};
