import React from 'react';
import './App.scss';
import DescBoxContainer from './components/container/DescBoxContainer';
import MainIndex from './components/MainIndex';

function App() {
  return (
    <div className="App">
      <MainIndex />
      <DescBoxContainer />
    </div>
  );
}

export default App;
