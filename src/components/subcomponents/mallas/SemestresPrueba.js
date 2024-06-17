// import React from 'react';
// import { Card } from 'react-bootstrap';
// import ImagePrueba from '../../../img/Matematicas.png'; // Asegúrate de ajustar la ruta al archivo de imagen.
// import semestreprueba from "../../../style/semestreprueba.css"

// const SemestresPrueba = () => {
//     return (
//         <Card style={{ border: 'none', position: 'relative', display: 'inline-block' }}>
//             <img src={ImagePrueba} alt="Descripción de la imagen" className="image" />
//             <div className="text-overlay">Filosofia</div>
//         </Card>
//     );
// }

// export default SemestresPrueba;
import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';
import ImagePrueba from '../../../img/Matematicas.png'; // Asegúrate de ajustar la ruta al archivo de imagen.
import semestreprueba from "../../../style/semestreprueba.css"

const SemestresPrueba = () => {
    // Estado para controlar la visibilidad del modal
    const [show, setShow] = useState(false);

    // Funciones para abrir y cerrar el modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{ border: 'none', position: 'relative', display: 'inline-block' }}>
                <img src={ImagePrueba} alt="Descripción de la imagen" className="image" />
                <div className="text-overlay" onClick={handleShow}>Filosofia</div>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalles de Filosofia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Aquí puedes agregar información detallada sobre la filosofía. 
                    Puedes incluir texto, imágenes u otros elementos que consideres relevantes.
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
