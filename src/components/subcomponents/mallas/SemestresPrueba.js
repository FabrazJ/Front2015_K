import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import ImagePrueba from '../../../img/MallaPrueba.jpeg'; // Asegúrate de ajustar la ruta al archivo de imagen.

const SemestresPrueba = () => {
    const [show, setShow] = useState(false);  // Estado para controlar la visibilidad del modal
    const [selectedBox, setSelectedBox] = useState(null);  // Estado para almacenar el recuadro seleccionado

    // Funciones para abrir y cerrar el modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Función para manejar el clic en el recuadro y mostrar el modal con detalles
    const handleBoxClick = (box) => {
        setSelectedBox(box);
        handleShow();  // Mostrar el modal al seleccionar un recuadro
    };

    return (
        <>
            <Card
                style={{ border: 'none', position: 'relative', display: 'inline-block', cursor: 'pointer' }}
                onClick={() => handleBoxClick({ title: 'Filosofia', content: 'Información de Filosofia' })}
            >
                <img src={ImagePrueba} alt="Descripción de la imagen" className="image" />
                <div className="text-overlay">Filosofia</div>
            </Card>

            {/* Modal para mostrar los detalles */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles de {selectedBox ? selectedBox.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBox ? selectedBox.content : ''}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SemestresPrueba;
