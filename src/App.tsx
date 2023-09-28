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


const  App : React.FC = () => {
  

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



  return (
    <div className="p-10">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
      <Carousel />
      <Table />
    </div>
    </div>
  );
}

export default App;
