import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Randomizer from './pages/Randomizer/Randomizer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/randomizer" element={<Randomizer/>} />
      </Routes>
    </div>
  );
}

export default App;
