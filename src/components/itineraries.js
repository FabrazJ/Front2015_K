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
      {/* <i className="info-icon">ℹ️</i> */}
      <span>
      <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd"/>
</svg> Puede consultar los itinerarios aquí:
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
