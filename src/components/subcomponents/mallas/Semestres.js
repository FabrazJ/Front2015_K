// import React from 'react';
// import Semestre from './Semestre';

// const semestresData = [
//     {
//         semestre: 1,
//         materias: [
//             { title: 'Física: Mecánica', credits: 6, image: 'path/to/image1.png' },
//             { title: 'Cálculo de una Variable', credits: 9, image: 'path/to/image2.png' },
//             // Añade más materias según sea necesario
//         ],
//     },
//     {
//         semestre: 2,
//         materias: [
//             { title: 'Mineralogía', credits: 6, image: 'path/to/image3.png' },
//             { title: 'Inglés I', credits: 5, image: 'path/to/image4.png' },
//             // Añade más materias según sea necesario
//         ],
//     },
//     // Añade más semestres según sea necesario
// ];

// const Semestres = () => {
//     return (
//         <div>
//             {semestresData.map((data, index) => (
//                 <Semestre key={index} semestre={data.semestre} materias={data.materias} />
//             ))}
//         </div>
//     );
// }

// export default Semestres;

import React from 'react';
import Semestre from './Semestre';

const semestresData = [
    {
        semestre: 1,
        materias: [
            { title: 'Física: Mecánica', credits: 6, image: 'path/to/image1.png' },
            { title: 'Cálculo de una Variable', credits: 9, image: 'path/to/image2.png' },
            // Añade más materias según sea necesario
        ],
    },
    {
        semestre: 2,
        materias: [
            { title: 'Mineralogía', credits: 6, image: 'path/to/image3.png' },
            { title: 'Inglés I', credits: 5, image: 'path/to/image4.png' },
            // Añade más materias según sea necesario
        ],
    },
    // Añade más semestres según sea necesario
];

const Semestres = () => {
    return (
        <div>
            {semestresData.map((data, index) => (
                <Semestre key={index} semestre={data.semestre} materias={data.materias} />
            ))}
        </div>
    );
}

export default Semestres;