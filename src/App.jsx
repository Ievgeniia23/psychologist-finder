// import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
// import AppBar from './components/AppBar/AppBar';
import Home from './pages/Home/Home.jsx';
import Psychologists from "./pages/Psychologists/Psychologists.jsx";
import './App.css';

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/psychologists" element={<Psychologists />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
