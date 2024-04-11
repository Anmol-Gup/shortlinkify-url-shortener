import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDuGnzHX4-GyzWnIU6cJM6s4phXPhIP1-k",
  authDomain: "url-shortner-b526b.firebaseapp.com",
  projectId: "url-shortner-b526b",
  storageBucket: "url-shortner-b526b.appspot.com",
  messagingSenderId: "448371411623",
  appId: "1:448371411623:web:23b21e619b22663e5ba982",
  databaseURL:"https://url-shortner-b526b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);