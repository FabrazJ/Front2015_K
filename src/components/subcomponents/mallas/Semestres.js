import React from 'react';
import Semestre from './Semestre';

const semestresData = [
    {
        semestre: 1,
        materias: [
            { title: 'FUNDAMENTOS DE PROGRAMACIÓN', code: 'CCPG1043', credits: 9 },
            { title: 'CÁLCULO VECTORIAL', code: 'MATG1046', credits: 9 },
        ],
    },
    {
        semestre: 2,
        materias: [
            { title: 'COMPLEMENTARIAS DE ARTES, DEPORTES E IDIOMAS', code: '', credits: 3 },
            { title: 'ECUACIONES DIFERENCIALES Y ÁLGEBRA LINEAL', code: 'MATG1043', credits: 9 },
        ],
    },
    {
        semestre: 3,
        materias: [
            { title: 'ESTRUCTURAS DE DATOS', code: 'CCPG2045', credits: 9 },
            { title: 'CÁLCULO AVANZADO', code: 'MATG2042', credits: 9 },
        ],
    },
    {
        semestre: 4,
        materias: [
            { title: 'BASES DE DATOS', code: 'CCPG2046', credits: 9 },
            { title: 'PROBABILIDAD Y ESTADÍSTICA', code: 'MATG2043', credits: 9 },
        ],
    },
    {
        semestre: 5,
        materias: [
            { title: 'ANÁLISIS Y DISEÑO DE ALGORITMOS', code: 'CCPG2047', credits: 9 },
            { title: 'ELECTIVA PROFESIONAL I', code: '', credits: 6 },
        ],
    },
    {
        semestre: 6,
        materias: [
            { title: 'ARQUITECTURA DE COMPUTADORES', code: 'CCPG2065', credits: 9 },
            { title: 'ELECTIVA PROFESIONAL II', code: '', credits: 6 },
        ],
    },
    {
        semestre: 7,
        materias: [
            { title: 'INTELIGENCIA ARTIFICIAL', code: 'CCPG2071', credits: 9 },
            { title: 'SISTEMAS DISTRIBUIDOS', code: 'CCPG2072', credits: 9 },
        ],
    },
];

const Semestres = () => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Primeras dos columnas */}
            {semestresData.slice(0, 2).map((data, index) => (
                <div key={index}>
                    <Semestre semestre={data.semestre} materias={data.materias} />
                </div>
            ))}
            {/* Prueba */}

            {/* Semestres verticales */}
            <div style={{ gridColumn: 'span 2', marginTop: '20px' }}>
                {semestresData.slice(2).map((data, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <Semestre semestre={data.semestre} materias={data.materias} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Semestres;
