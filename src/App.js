import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Cart from './components/CartItems/CartItems';
import "./App.css";
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
    <Header />
    <Home />
    <About />
    <Menu />
    </div>
  );
}

export default App;
