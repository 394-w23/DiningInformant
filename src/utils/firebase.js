import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
  addDoc,
  orderBy,
  query
} from 'firebase/firestore/lite';

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
