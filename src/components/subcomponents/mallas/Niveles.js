import React from 'react';
import { Card } from 'react-bootstrap';

const Niveles = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Niveles</Card.Title>
                <Card.Text>
                    {/* Add the content for Niveles here */}
                    NIVEL 100 - I<br/>
                    NIVEL 100 - II<br/>
                    NIVEL 200 - I<br/>
                    NIVEL 200 - II<br/>
                    NIVEL 300 - I<br/>
                    NIVEL 300 - II<br/>
                    NIVEL 400 - I<br/>
                    NIVEL 400 - II
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Niveles;
