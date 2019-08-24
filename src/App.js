import React from 'react';
import Axios from 'axios';
import Mounting from './components/mounting_01';
import Profile from './components/profile';
import Clock from './components/clock';
import { render, unmountComponentAtNode } from 'react-dom'

function App() {

  return (
    <Clock onClose={() => (console.log("unmountComponentAtNode() called!"), unmountComponentAtNode(document.getElementById('root')))}/>
    
  );
}

export default App;
