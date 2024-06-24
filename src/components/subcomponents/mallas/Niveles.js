import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Niveles = () => {
    return (
        <Card style={{ border: 'none' }}>
            <Card.Body>
                <Card.Title>Niveles</Card.Title>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>NIVEL 100 - I</td>
                        </tr>
                        <tr>
                            <td>NIVEL 100 - II</td>
                        </tr>
                        <tr>
                            <td>NIVEL 200 - I</td>
                        </tr>
                        <tr>
                            <td>NIVEL 200 - II</td>
                        </tr>
                        <tr>
                            <td>NIVEL 300 - I</td>
                        </tr>
                        <tr>
                            <td>NIVEL 300 - II</td>
                        </tr>
                        <tr>
                            <td>NIVEL 400 - I</td>
                        </tr>
                        <tr>
                            <td>NIVEL 400 - II</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}

export default Niveles;
