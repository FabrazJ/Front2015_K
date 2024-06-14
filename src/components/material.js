// src/components/material.js
import React from 'react';
import CSubject from './CSubject';
import Itineraries from './Itineraries';
// Styles
import '../style/prueba.css'
const Material = () => {
  return (
    <div className="material-container">
      <h1>Computación</h1>
      <CSubject />
      <Itineraries/>
      {/* <Malla /> */}
    </div>
  );
};

export default Material;
