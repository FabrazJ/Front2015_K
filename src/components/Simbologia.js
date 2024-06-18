import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import simbologiaImage from '../img/Simbologia.PNG';
import Titulacion from '../img/Titulacion.png';
import Matematicas from '../img/Matematicas.png';
import FormProfesional from '../img/FormPROFESIONAL.png';
import EducacionGeneral from '../img/eduacionGeneral.png';
import Itinerario2 from '../img/Itinerario2.png';
import ComplementariaA from '../img/complementariaA.png';
import Practicas from '../img/practicas.png';

const Simbologia = () => {
    return (
        <Container>
            {/* Simbologia Image */}
            <Row className="justify-content-center mb-3">
                <Col xs="auto">
                    <Image src={simbologiaImage} alt="Simbologia" width={150} height={150} />
                </Col>
            </Row>

            {/* Unidades de Organización Curricular */}
            <Row className="justify-content-center mb-3">
                <Col xs={8} className="p-3 border">
                    <h5 className="text-center">UNIDADES DE ORGANIZACIÓN CURRICULAR</h5>
                    <Row className="text-center">
                        <Col><CardComponent letra="B" label="Unidad Básica" /></Col>
                        <Col><CardComponent letra="P" label="Unidad Profesional" /></Col>
                        <Col><CardComponent letra="I" label="Unidad Integración Curricular" /></Col>
                    </Row>
                </Col>
            </Row>

            {/* Tipos de Materias */}
            <Row className="justify-content-center mb-3">
                <Col xs={10} className="p-3 border">
                    <h5 className="text-center">TIPOS DE MATERIAS</h5>
                    <Row className="text-center">
                        <Col><ImageLabel imageSrc={Matematicas} label="MATEMÁTICAS Y CIENCIAS BÁSICAS" hours="720" /></Col>
                        <Col><ImageLabel imageSrc={Titulacion} label="U DE INTEGRACIÓN CURRICULAR" hours="384" /></Col>
                        <Col><ImageLabel imageSrc={FormProfesional} label="FORMACIÓN PROFESIONAL" hours="2928" /></Col>
                    </Row>
                    <Row className="mt-3 text-center">
                        <Col><ImageLabel imageSrc={EducacionGeneral} label="EDUCACIÓN GENERAL" hours="1008" /></Col>
                        <Col><ImageLabel imageSrc={Itinerario2} label="ITINERARIO" hours="288" /></Col>
                        <Col><ImageLabel imageSrc={ComplementariaA} label="C. DE HUMANÍSTICA" hours="48" /></Col>
                    </Row>
                    <Row className="mt-3 text-center">
                        <Col><ImageLabel imageSrc={ComplementariaA} label="C. DE ARTE Y DEPORTES" hours="48" /></Col>
                        <Col><ImageLabel imageSrc={Practicas} label="PRÁCTICAS COMUNITARIAS" hours="96" /></Col>
                        <Col><ImageLabel imageSrc={Practicas} label="PRÁCTICAS EMPRESARIALES" hours="96" /></Col>
                    </Row>
                </Col>
            </Row>

            {/* Totales de Horas */}
            <Row className="justify-content-center mb-3">
                <Col xs={3} className="text-center">
                    <CardComponent label="Horas de Prácticas Pre Profesionales(*)" hours="336" />
                    <CardComponent label="Horas para Trabajo Titulación" hours="240" />
                </Col>
                <Col xs={3} className="text-center">
                    <CardComponent label="TOTAL HORAS" hours="5184" />
                    <p className="small">(*) De las cuales 96 horas mínimo deben ser de servicio a la comunidad</p>
                </Col>
            </Row>
        </Container>
    );
}

const CardComponent = ({ letra, label, hours }) => (
    <Card className="text-center mb-3" style={{ border: 'none' }}>
        {letra && <Card.Body className="divImagen" style={{ padding: '10px' }}>{letra}</Card.Body>}
        <Card.Body className="divEtiqueta" style={{ fontSize: '0.9rem' }}>
            {label}<br />{hours && <span>{hours} HORAS</span>}
        </Card.Body>
    </Card>
);

const ImageLabel = ({ imageSrc, label, hours }) => (
    <Card className="text-center mb-3" style={{ border: 'none' }}>
        <Card.Img variant="top" src={imageSrc} height={20} width={40} />
        <Card.Body className="divEtiqueta" style={{ fontSize: '0.9rem' }}>
            {label}<br /><span>{hours} HORAS</span>
        </Card.Body>
    </Card>
);

export default Simbologia;
