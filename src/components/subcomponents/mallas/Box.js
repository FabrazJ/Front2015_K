import React from 'react';

const Box = ({ title, code, credits, color }) => {
    return (
        <div className={`card text-center mb-3 ${color}`} style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{code}</h6>
                <p className="card-text">Créditos: {credits}</p>
            </div>
        </div>
    );
};

export default Box;
