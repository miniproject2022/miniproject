import React from 'react';
import './style.css';
import { DashBoard } from './components/DashBoard';
import { Complain } from './components/engine/Complain';
export default function App() {
  return (
    <div>
      <DashBoard />
      <Complain />
    </div>
  );
}
