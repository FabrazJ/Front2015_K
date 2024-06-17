import React from 'react';
import { Container, Row, Col, Card, Image, Table } from 'react-bootstrap';

const Simbologia = () => {
    return (
        <Container>
            <Row>
                {/* Imagen principal */}
                <Col md={{ span: 4, offset: 4 }} className="text-center mb-3">
                    <Image src="../img/Simbologia.PNG" height={200} width={200} alt="Simbologia" rounded />
                </Col>
            </Row>

            {/* Unidades de Organización Curricular */}
            <Row className="mb-3">
                <Col lg={{ span: 7, offset: 1 }} className="table-bordered p-3">
                    <h5 className="text-center">UNIDADES DE ORGANIZACIÓN CURRICULAR</h5>
                    <Row className="text-center">
                        <Col><CardComponent letra="B" label="Unidad Básica" /></Col>
                        <Col><CardComponent letra="P" label="Unidad Profesional" /></Col>
                        <Col><CardComponent letra="I" label="Unidad Integración Curricular" /></Col>
                    </Row>
                </Col>
            </Row>

            {/* Tipos de Materias */}
            <Row className="mb-3">
                <Col lg={{ span: 7, offset: 1 }} className="table-bordered p-3">
                    <h5 className="text-center">TIPOS DE MATERIAS</h5>
                    <Row className="text-center">
                        <Col><ImageLabel imageSrc="../../Images/Matematicas.PNG" label="MATEMÁTICAS Y CIENCIAS BÁSICAS" hours="720" /></Col>
                        <Col><ImageLabel imageSrc="../../Images/Titulacion.PNG" label="U DE INTEGRACIÓN CURRICULAR" hours="384" /></Col>
                        <Col><ImageLabel imageSrc="../../Images/FormPROFESIONAL.PNG" label="FORMACIÓN PROFESIONAL" hours="2928" /></Col>
                    </Row>
                    <Row className="mt-3 text-center">
                        <Col><ImageLabel imageSrc="../../Images/eduacionGeneral.PNG" label="EDUCACIÓN GENERAL" hours="1008" /></Col>
                        <Col><ImageLabel imageSrc="../../Images/itinerario2.PNG" label="ITINERARIO" hours="288" /></Col>
                        <Col><ImageLabel imageSrc="../../Images/COMPLEMENTARIAH.PNG" label="C. DE HUMANÍSTICA" hours="48" /></Col>
                    </Row>
                    <Row className="mt-3 text-center">
                        <Col><ImageLabel imageSrc="../../Images/COMPLEMENTARIAA.PNG" label="C. DE ARTE Y DEPORTES" hours="48" /></Col>
                        <Col><ImageLabel imageSrc="../../Images/PRACTICAS.PNG" label="PRÁCTICAS COMUNITARIAS" hours="96" /></Col>
                        <Col><ImageLabel imageSrc="../../Images/PRACTICAS.PNG" label="PRÁCTICAS EMPRESARIALES" hours="96" /></Col>
                    </Row>
                </Col>
            </Row>

            {/* Totales de Horas */}
            <Row className="mb-3">
                <Col lg={2} className="text-center">
                    <CardComponent label="Horas de Prácticas Pre Profesionales(*)" hours="336" />
                    <CardComponent label="Horas para Trabajo Titulación" hours="240" />
                </Col>
                <Col lg={2} className="text-center">
                    <CardComponent label="TOTAL HORAS" hours="5184" />
                    <p className="small">(*) De las cuales 96 horas mínimo deben ser de servicio a la comunidad</p>
                </Col>
            </Row>
        </Container>
    );
}

const CardComponent = ({ letra, label, hours }) => (
    <Card className="text-center mb-3" style={{ border: 'none' }}>
        {letra && <Card.Body className="divImagen">{letra}</Card.Body>}
        <Card.Body className="divEtiqueta">
            {label}<br />{hours && <span>{hours} HORAS</span>}
        </Card.Body>
    </Card>
);

const ImageLabel = ({ imageSrc, label, hours }) => (
    <Card className="text-center mb-3" style={{ border: 'none' }}>
        <Card.Img variant="top" src={imageSrc} height={14} width={32} />
        <Card.Body className="divEtiqueta">
            {label}<br /><span>{hours} HORAS</span>
        </Card.Body>
    </Card>
);

export default Simbologia;
