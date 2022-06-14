import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import './style.css';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/details">
          <HomePage />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;