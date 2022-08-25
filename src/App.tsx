import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import DescBoxContainer from './components/container/DescBoxContainer';
import MainIndex from './components/MainIndex';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainIndex />} />
        <Route path='/projectsdesc/*' element={<DescBoxContainer />} />
      </Routes>
    </div>
  );
}

export default App;
