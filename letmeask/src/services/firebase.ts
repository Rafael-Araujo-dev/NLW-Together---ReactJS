import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAkwKDtXKr_wylruMebmea3_8_RTb2cstI",
    authDomain: "letmeask-a66b9.firebaseapp.com",
    databaseURL: "https://letmeask-a66b9-default-rtdb.firebaseio.com",
    projectId: "letmeask-a66b9",
    storageBucket: "letmeask-a66b9.appspot.com",
    messagingSenderId: "806073378346",
    appId: "1:806073378346:web:df8e8289d0c00f2bff4553"
  };

initializeApp(firebaseConfig);

export const auth = getAuth();

export const database = getDatabase();