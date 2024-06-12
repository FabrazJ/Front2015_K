// src/components/Geology.js
import React from 'react';
import ComplementarySubjects from './ComplementarySubjects';
import Itineraries from './Itineraries';
import './prueba.css'; // Optional for specific styles

const Geology = () => {
  return (
    <div className="geology-container">
      <h1>Geología</h1>
      <ComplementarySubjects />
      <Itineraries />
    </div>
  );
};

export default Geology;
