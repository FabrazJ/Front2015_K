import React from 'react';
import { Card } from 'react-bootstrap';

const Niveles = () => {
    return (
        <Card style={{ border: 'none' }}>
            <Card.Body>
                <Card.Title>Niveles</Card.Title>
                <Card.Text>
                    {/* Add the content for Niveles here */}
                    NIVEL 100 - I<br/><br/><br/>
                    NIVEL 100 - II<br/><br/><br/>
                    NIVEL 200 - I<br/><br/><br/>
                    NIVEL 200 - II<br/><br/><br/>
                    NIVEL 300 - I<br/><br/><br/>
                    NIVEL 300 - II<br/><br/><br/>
                    NIVEL 400 - I<br/><br/><br/>
                    NIVEL 400 - II
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Niveles;
