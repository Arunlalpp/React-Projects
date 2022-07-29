import React from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Help from './Components/Help';
import Home from './Components/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='help' element={<Help />} />
    </Routes>
  );
}

export default App;
