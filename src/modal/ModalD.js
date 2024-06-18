import React from 'react';
import { Modal, Button, Table, Alert } from 'react-bootstrap';

const ModalD = ({ course, onClose }) => (
  <Modal show={!!course} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Detalles de {course.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Tabla para Código y Materia */}
      <Table bordered>
        <tbody>
          <tr>
            <td><strong>Código:</strong></td>
            <td>{course.code}</td>
          </tr>
          <tr>
            <td><strong>Materia:</strong></td>
            <td>{course.subject}</td>
          </tr>
        </tbody>
      </Table>

      {/* Mensaje de Requisitos */}
      {course.prerequisitesMet ? (
        <Alert variant="info">
          Esta materia tiene como requisito {course.prerequisiteCount} materias aprobadas
        </Alert>
      ) : (
        <Alert variant="danger">
          No cumple con los requisitos necesarios ({course.prerequisiteCount} materias aprobadas requeridas)
        </Alert>
      )}

      {/* Descripción del Curso */}
      <h5>Descripción</h5>
      <p>{course.description}</p>

      {/* Botón de Descargar contenido */}
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={() => downloadContent(course.code)}>Descargar contenido</Button>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

// Función simulada para descargar contenido
const downloadContent = (courseCode) => {
  // Aquí se manejaría la lógica para descargar el contenido, por ejemplo, redirigir a un link de descarga.
  alert(`Descargando contenido para el curso: ${courseCode}`);
};

export default ModalD;
