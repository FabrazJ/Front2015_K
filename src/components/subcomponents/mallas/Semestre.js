import React from 'react';
import Materia from './Materia';
import { Row, Col } from 'react-bootstrap';

const Semestre = ({ semestre, materias }) => {
    return (
        <div>
            <h2>Semestre {semestre}</h2>
            <Row>
                {materias.map((materia, index) => (
                    <Col key={index}>
                        <Materia title={materia.title} credits={materia.credits} image={materia.image} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Semestre;
