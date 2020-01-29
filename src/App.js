import React from 'react';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Footer />
    </div>
  );
}

export default App;
