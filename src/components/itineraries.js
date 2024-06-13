// src/components/Itineraries.js
import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import ItinerariosModal from '../modal/ItinerariosModal';

const Itineraries = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="itineraries">
      <i className="info-icon">ℹ️</i>
      <span>
        Puede consultar los itinerarios aquí: 
        <a href="link_to_itineraries" target="_blank" rel="noopener noreferrer"> Itinerarios</a>
      </span>
    </div>
  );
};

export default Itineraries;
