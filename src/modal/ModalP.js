import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const ModalP = ({ course, onClose }) => (
  <Modal show={!!course} onHide={onClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>Detalles de {course.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
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
      <Table bordered>
        <thead>
          <tr>
            <th>Código</th>
            <th>Materia</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{course.prerequisite.code}</td>
            <td>{course.prerequisite.subject}</td>
            <td>{course.prerequisite.type}</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-center my-3">
        <Button variant="success">
          Sílabo Español
        </Button>
      </div>

      <h5>Descripción</h5>
      <p>{course.description}</p>
      <div className="d-flex justify-content-center">
        <Button variant="primary">Descargar contenido</Button>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalP;