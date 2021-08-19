import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Cars from './components/Cars/Cars';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Cars />
    </div>
  );
};

export default App;
