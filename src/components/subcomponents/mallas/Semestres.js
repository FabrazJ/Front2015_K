// src/components/Semestres.js
import React, { useState, useEffect } from 'react';
import '../../../style/semestres.css';

const Semestres = () => {
  const [token, setToken] = useState(null);
  const [mallaData, setMallaData] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    if (token) {
      validateToken(token);
    } else {
      redirectToCAS();
    }
  }, []);

  const redirectToCAS = () => {
    const service = window.location.href.split('?')[0];
    window.location.href = `https://auth.espol.edu.ec/login?service=${service}`;
  };

  const validateToken = async (token) => {
    const isValid = await verifyToken(token);
    if (isValid) {
      setToken(token);
      fetchMallaData(token);
    } else {
      redirectToCAS();
    }
  };

  const verifyToken = async (token) => {
    // Implementa la lógica para verificar el token
    // Esto puede ser una llamada a una API
    return true; // Cambia esto por la lógica real
  };

  const fetchMallaData = async (token) => {
    // Implementa la lógica para obtener los datos de la malla curricular
    // Esto puede ser una llamada a una API
    const data = {
      // Ejemplo de datos de malla
      nombre: "Ingeniería en Computación",
      cursos: [
        { nombre: "Matemáticas", codigo: "MAT101" },
        { nombre: "Programación", codigo: "PRG102" }
      ]
    };
    setMallaData(data);
  };

  if (!token) {
    return <div>Loading...</div>;
  }

  return (
    <div className="semestres">
      <h1>Malla Curricular</h1>
      {mallaData ? (
        <div>
          <h2>{mallaData.nombre}</h2>
          <ul>
            {mallaData.cursos.map((curso, index) => (
              <li key={index}>
                {curso.codigo} - {curso.nombre}
              </li>
            ))}
          </ul>
          <div>
            {/* Código de tu componente Semestres */}
            <h2>Semestres</h2>
            <ul>
              <li>Primer Semestre</li>
              <li>Segundo Semestre</li>
              <li>Tercer Semestre</li>
              <li>Cuarto Semestre</li>
              <li>Quinto Semestre</li>
              <li>Sexto Semestre</li>
              <li>Séptimo Semestre</li>
              <li>Octavo Semestre</li>
              <li>Noveno Semestre</li>
              <li>Décimo Semestre</li>
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
};

export default Semestres;
