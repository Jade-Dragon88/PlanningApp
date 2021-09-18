// import logo from './logo.svg';
import './App.css';

import React from 'react';
import MainHeader from '../MainHeader/MainHeader'
import MainBody from '../MainBody/MainBody'


function App() {
  return (
    <div className="Main">
      <MainHeader name="ПЛАНИРОВАНИЕ"/>
      <MainBody/>
    </div>
  );
}

export default App;
