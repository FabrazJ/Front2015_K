import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const Itineraries = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="itineraries">
      <i className="info-icon">ℹ️</i>
      <span>
        Puede consultar los itinerarios aquí:
        <button className="btn btn-link" onClick={openModal}>Itinerarios</button>
      </span>

      {showModal && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Itinerarios</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="alert alert-info" role="alert">
                  Para consultar los requisitos de las materias del itinerario dar click sobre la materia.
                </div>
                <h5>MODELAMIENTO DE DATOS</h5>
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Itineraries;
