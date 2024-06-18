// Modal.js
import React from 'react';
import '../style/ModalPrueba.css'; // Para estilos del modal

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>Cerrar</button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
