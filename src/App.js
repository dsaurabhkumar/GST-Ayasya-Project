import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter className="App">
      <header>
        <NavBar />
      </header>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
