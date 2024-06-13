import React, { useState } from 'react';

const CSubject = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="complementary-subjects">
      <i className="info-icon">ℹ️</i>
      <span>
        Puede consultar las materias complementarias aquí:
        <button className="btn btn-link" onClick={openModal}>Materias Complementarias</button>
      </span>

      {showModal && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Materias Complementarias</h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p>Aquí puedes encontrar información adicional sobre las materias complementarias.</p>
            
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

export default CSubject;
