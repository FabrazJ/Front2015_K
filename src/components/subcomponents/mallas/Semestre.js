// import React from 'react';
// import Materia from './Materia';
// import { Row, Col } from 'react-bootstrap';

// const Semestre = ({ semestre, materias }) => {
//     return (
//         <div>
//             <h2>Semestre {semestre}</h2>
//             <Row>
//                 {materias.map((materia, index) => (
//                     <Col key={index}>
//                         <Materia title={materia.title} credits={materia.credits} image={materia.image} />
//                     </Col>
//                 ))}
//             </Row>
//         </div>
//     );
// }

// export default Semestre;
import React from 'react';

const Semestre = ({ semestre, materias }) => {
    if (!Array.isArray(materias)) {
        return <div>No hay materias disponibles para el semestre {semestre}</div>;
    }

    return (
        <div>
            <h2>Semestre {semestre}</h2>
            {materias.map((materia, index) => (
                <div key={index}>
                    <img src={materia.image} alt={materia.title} />
                    <h3>{materia.title}</h3>
                    <p>Créditos: {materia.credits}</p>
                </div>
            ))}
        </div>
    );
};

export default Semestre;
