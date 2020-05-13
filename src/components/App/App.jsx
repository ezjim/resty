import React from 'react';
import Request from '../App/Request/Request';
import Header from '../App/Header/Header';
import './App.css';

export default function App() {
  return (
    <div className='container'>
      <Header/>
      <Request/>
    </div>
  );
}
