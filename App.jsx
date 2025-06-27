import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShortenerPage from './components/ShortenerPage';
import StatsPage from './components/StatsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shorten" element={<ShortenerPage />} />
        <Route path="/stats"   element={<StatsPage />} />
        <Route path="*"         element={<Navigate to="/shorten" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
