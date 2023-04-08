import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Exp from './Exp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Canvas>
      <Exp />
    </Canvas>
  </React.StrictMode>
);
