import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import global styles
import './index.css';

import App from './App.jsx';
import MainPage from './pages/MainPage.jsx';
import InventoryPage from './pages/InventoryPage.jsx'; // ✅ New import

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }}
  >
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="inventory" element={<InventoryPage />} /> {/* ✅ New route */}
      </Route>
    </Routes>
  </BrowserRouter>
);