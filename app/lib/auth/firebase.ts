// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TO DO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: .envファイルに移動
const firebaseConfig = {
  apiKey: 'AIzaSyC4MU7TQVMUaUs566HOMHlUYQx8JVQnR_k',
  authDomain: 'next-test-ddbe4.firebaseapp.com',
  projectId: 'next-test-ddbe4',
  storageBucket: 'next-test-ddbe4.appspot.com',
  messagingSenderId: '645498526832',
  appId: '1:645498526832:web:b1588adb9ce2a6925ea8b5',
  measurementId: 'G-G44ZXKL09D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
