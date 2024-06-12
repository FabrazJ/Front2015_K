// src/components/Geology.js
import React from 'react';
import CSubject from './CSubject';
import itineraries from './itineraries';
import './style/prueba.css'
const material = () => {
  return (
    <div className="material-container">
      <h1>Geología</h1>
      <CSubject />
      <itineraries />
    </div>
  );
};

export default material;
