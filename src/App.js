import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Home, Transfer } from './pages';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found etc</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}