import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Canvas } from '@react-three/fiber';
import Exp from './Exp';

function Loading() {
  return(
  <>
  <h2>🌀 Loading...</h2>
  <p>It might take some time to load 3d model.</p>
  </>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Canvas>
        <Exp />
      </Canvas>
    </Suspense>
  </React.StrictMode>
);

