import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Index';
import Blog from './pages/Blog/Index';

function App() {
  return (
    <div className='container'>
    {
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog/:id" element={<Blog />} />
        </Routes>
      }
      </div>
  );
}

export default App;
