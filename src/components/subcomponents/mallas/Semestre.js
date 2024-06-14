import React from 'react';
import Box from './Box';
import Arrow from './Arrow';
import { Row, Col } from 'react-bootstrap';
import '../../../style/semestre.css';

const Semestre = ({ semestre, materias, showArrows }) => {
    if (!Array.isArray(materias)) {
        return <div>No hay materias disponibles para el semestre {semestre}</div>;
    }

    return (
        <div className="semestre">
            <Row className="justify-content-center">
                {materias.map((materia, index) => (
                    <Col key={index} className="d-flex justify-content-center">
                        <Box title={materia.title} code={materia.code || ''} credits={materia.credits} color="bg-light" />
                    </Col>
                ))}
            </Row>
            {showArrows && (
                <Row className="justify-content-center">
                    <Arrow />
                </Row>
            )}
        </div>
    );
};

export default Semestre;
