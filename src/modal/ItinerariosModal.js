import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const ItinerariosModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Itinerarios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-info" role="alert">
          Para consultar los requisitos de las materias del itinerario dar click sobre la materia.
        </div>
        <h5>MODELAMIENTO DE DATOS GEOLÓGICOS</h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Codigo materia</th>
              <th>Materia</th>
              <th># Horas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GEOG1043</td>
              <td>
                <a href="#" onClick={(e) => { e.preventDefault(); /* add your link handling code here */ }}>
                  MODELAMIENTO GEOLÓGICO
                </a>
              </td>
              <td>9</td>
            </tr>
            <tr>
              <td>GEOG1049</td>
              <td>
                <a href="#" onClick={(e) => { e.preventDefault(); /* add your link handling code here */ }}>
                  TELEDETECCIÓN
                </a>
              </td>
              <td>9</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default ItinerariosModal;
