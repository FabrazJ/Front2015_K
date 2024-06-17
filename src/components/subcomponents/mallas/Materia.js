import React from 'react';
import { Card } from 'react-bootstrap';

const Materia = ({ title, credits, image }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px', border: 'none'  }}>        

            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Créditos: {credits}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Materia;
