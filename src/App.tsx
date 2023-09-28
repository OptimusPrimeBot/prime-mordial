import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Table from './components/Table';
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs8uDC4yoqFQc4q49REqegE2GtvmyAGUg",
  authDomain: "optimum-prime-ce126.firebaseapp.com",
  projectId: "optimum-prime-ce126",
  storageBucket: "optimum-prime-ce126.appspot.com",
  messagingSenderId: "1029890817569",
  appId: "1:1029890817569:web:5b72edffa7969344fced60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



  return (
    <div className="p-10">
      <div className="App">
      <Carousel />
      <Table />
    </div>
    </div>
  );
}

export default App;
