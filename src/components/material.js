// src/components/material.js
import React from 'react';
import CSubject from './CSubject';
import Itineraries from './Itineraries';
import Semestres from './subcomponents/mallas/Semestres';
import HorasSemestrales from './subcomponents/mallas/HorasSemestrales';
import Niveles from './subcomponents/mallas/Niveles';
// Styles
import '../style/prueba.css'
//Contenedor de prueba
import { Container, Row, Col } from 'react-bootstrap';

const Material = () => {
  return (
    <Container >
      <h1>Computación</h1>
      <CSubject />
      <Itineraries />

      <Row>
        <Col md={2}>
          <Niveles />
        </Col>
        <Col md={8}>
          <Semestres />
        </Col>
        <Col md={2}>
          <HorasSemestrales />
        </Col>
      </Row>
    </Container>
  );
};

export default Material;
