// src/components/material.js
import React from 'react';
import CSubject from './CSubject';
import Itineraries from './Itineraries';
// Styles
import '../style/prueba.css'
const Material = () => {
  return (
    <div className="material-container">
      <h1>___________-</h1>
      <CSubject />
      <Itineraries/>
    </div>
  );
};

export default Material;
