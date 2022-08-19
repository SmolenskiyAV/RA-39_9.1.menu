import React from "react";
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import DriftPage from './components/DriftPage/DriftPage';
import TimeAttackPage from './components/TimeAttackPage/TimeAttackPage';
import ForzaPage from './components/ForzaPage/ForzaPage';

export default function App() {
  return (
    <>
      <Menu />
        <Routes>
          <Route className="page">
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Route>
        </Routes>
    </>  
  );
}