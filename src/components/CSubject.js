import React, { useState, useEffect } from 'react';
import '../style/modal.css'
 

const CSubject = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault(); // Prevenir navegación predeterminada
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);

  return (
    <div className="complementary-subjects">
      <i className="info-icon">ℹ️</i>
      <span>
        Puede consultar las materias complementarias aquí:
        <a href="#" onClick={openModal}> Materias Complementarias</a>
      </span>
      {showModal && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={closeModal}>Cerrar</button>
          <div className="custom-content">
            <h2>Materias Complementarias</h2>
            <p>Aquí puedes encontrar información adicional sobre las materias complementarias.</p>
            <ul>
              <li>Materia 1</li>
              <li>Materia 2</li>
              <li>Materia 3</li>
            </ul>
          </div>
        </div>
      </div>
    )}
    </div>
  );
};

export default CSubject;
