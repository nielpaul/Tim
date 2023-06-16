import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';
import Investors from './Investors';
import Podcasters from './Podcasters';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/Podcasters" element={<Podcasters />} />
    <Route path="/Investors" element={<Investors />} />
  </Routes>
</Router>
);

