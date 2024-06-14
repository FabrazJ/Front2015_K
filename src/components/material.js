// src/components/material.js
import React from 'react';
import CSubject from './CSubject';
import Itineraries from './Itineraries';
import Semestres from './subcomponents/mallas/Semestres';
import HorasSemestrales from './subcomponents/mallas/HorasSemestrales';
import Niveles from './subcomponents/mallas/Niveles';
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
