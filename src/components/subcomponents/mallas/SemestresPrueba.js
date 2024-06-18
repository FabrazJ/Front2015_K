import React, { useState } from 'react';
import { Card, Modal, Button, Table } from 'react-bootstrap';
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

    const sampleBox = {
        title: "Prueba I",
        code: "Pru1231",
        subject: "Prueba I",
        prerequisite: {
            code: "Pru1231",
            subject: "INTRODUCCIÓN A LA PRUEBA",
            type: "PRE-REQUISITO"
        },
        description: `pruebaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`
    };

    return (
        <>
            <Card
                style={{ border: 'none', position: 'relative', display: 'inline-block', cursor: 'pointer' }}
                onClick={() => handleBoxClick(sampleBox)}
            >
                <img src={ImagePrueba} alt="Descripción de la imagen" className="image" />
                <div className="text-overlay">_______________</div>
            </Card>

            {/* Modal para mostrar los detalles */}
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Detalles de {selectedBox ? selectedBox.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBox ? (
                        <div>
                            <Table bordered>
                                <tbody>
                                    <tr>
                                        <td><strong>Código:</strong></td>
                                        <td>{selectedBox.code}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Materia:</strong></td>
                                        <td>{selectedBox.subject}</td>
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
                                        <td>{selectedBox.prerequisite.code}</td>
                                        <td>{selectedBox.prerequisite.subject}</td>
                                        <td>{selectedBox.prerequisite.type}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-success mb-3">Silabo Español</button>
    </div>
                            <h5>Descripción</h5>
                            <p>{selectedBox.description}</p>
                            <div className="d-flex justify-content-center">
      <Button variant="primary">Descargar contenido</Button>
    </div>
                        </div>
                    ) : ''}
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
