import React from 'react';
import { Modal, Button, Table, Alert } from 'react-bootstrap';

const ModalG = ({ group, onClose }) => (
  <Modal show={!!group} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Detalles del Grupo de Cursos: {group.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {/* Tabla para Nombre del Grupo y Número de Créditos */}
      <Table bordered>
        <tbody>
          <tr>
            <td><strong>Nombre del Grupo:</strong></td>
            <td>{group.name}</td>
          </tr>
          <tr>
            <td><strong>Número de Créditos:</strong></td>
            <td>{group.credits}</td>
          </tr>
        </tbody>
      </Table>

      {/* Lista de Cursos en el Grupo */}
      <h5>Cursos en este grupo:</h5>
      <ul>
        {group.courses.map((course, index) => (
          <li key={index}>{course.title} ({course.code})</li>
        ))}
      </ul>

      {/* Descripción del Grupo de Cursos */}
      <h5>Descripción</h5>
      <p>{group.description}</p>

      {/* Mensaje si los Créditos son Suficientes */}
      {group.creditsMet ? (
        <Alert variant="info">
          Tienes suficientes créditos en este grupo.
        </Alert>
      ) : (
        <Alert variant="danger">
          No tienes suficientes créditos en este grupo.
        </Alert>
      )}

      {/* Botón de Descargar contenido */}
      <div className="d-flex justify-content-center">
        <Button variant="primary" onClick={() => downloadContent(group.name)}>Descargar información del grupo</Button>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

const downloadContent = (groupName) => {
  alert(`Descargando información para el grupo de cursos: ${groupName}`);
};

export default ModalG;
