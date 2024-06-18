import React from 'react';
import { Modal, Button, Table, Alert } from 'react-bootstrap';

const ModalF = ({ course, onClose }) => (
  <Modal show={!!course} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Detalles del Curso Final: {course.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Tabla para Código, Materia y Fecha del Examen Final */}
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
          <tr>
            <td><strong>Fecha del Examen Final:</strong></td>
            <td>{course.finalExamDate}</td>
          </tr>
        </tbody>
      </Table>

      {/* Mensaje de Estado del Curso Final */}
      {course.isFinalPassed ? (
        <Alert variant="success">
          ¡Felicidades! Has aprobado este curso final con una calificación de {course.finalGrade}
        </Alert>
      ) : (
        <Alert variant="warning">
          No has aprobado este curso final. Calificación obtenida: {course.finalGrade}
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

const downloadContent = (courseCode) => {
  alert(`Descargando contenido para el curso: ${courseCode}`);
};

export default ModalF;
