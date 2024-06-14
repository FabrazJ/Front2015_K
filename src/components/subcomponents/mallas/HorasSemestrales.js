import React from 'react';
import { Card } from 'react-bootstrap';
const HorasSemestrales = () => {
    const horas = [720, 720, 720, 720, 576, 624, 384];
    
    return (
        <Card>
            <Card.Body>
                <Card.Title>Horas Semestrales</Card.Title>
                <Card.Text>
                    {/* {horas.map((hora, index) => (
                        <div key={index} className="number-container">
                            <div className="square"></div>
                            <div className="number">{hora}</div>
                        </div>
                    ))} */}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default HorasSemestrales;
