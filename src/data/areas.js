// const areas = [
//     { id: 1, courseId: 1, top: '5%', left: '10%', width: '8%', height: '5%' },
//     { id: 2, courseId: 2, top: '15%', left: '10%', width: '8%', height: '5%' },
//     { id: 3, courseId: 3, top: '25%', left: '10%', width: '8%', height: '5%' },
//     { id: 4, courseId: 4, top: '35%', left: '10%', width: '8%', height: '5%' },
//     { id: 5, courseId: 5, top: '45%', left: '10%', width: '8%', height: '5%' },
//     { id: 6, courseId: 6, top: '5%', left: '30%', width: '8%', height: '5%' },
//     { id: 7, courseId: 7, top: '15%', left: '30%', width: '8%', height: '5%' },
//   ];
  
//   export default areas;
  // Parámetros de la malla
const numRows = 10; // Número de filas en la malla
const numCols = 5; // Número de columnas en la malla
const areaWidthPercent = 8; // Ancho de cada área en porcentaje
const areaHeightPercent = 5; // Alto de cada área en porcentaje
const containerWidth = 1000; // Ancho del contenedor en píxeles
const containerHeight = 800; // Alto del contenedor en píxeles

// Función para generar las áreas automáticamente
function generateAreas(numRows, numCols, areaWidthPercent, areaHeightPercent, containerWidth, containerHeight) {
  const areas = [];
  let id = 1;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const topPercent = row * (areaHeightPercent + 5); // Ajuste del desplazamiento vertical entre áreas
      const leftPercent = col * (areaWidthPercent + 15); // Ajuste del desplazamiento horizontal entre áreas

      if (topPercent < 100 && leftPercent < 100) { // Asegurar que las áreas están dentro del contenedor
        areas.push({
          id: id++,
          courseId: id,
          x: (leftPercent / 100) * containerWidth,
          y: (topPercent / 100) * containerHeight,
          width: (areaWidthPercent / 100) * containerWidth,
          height: (areaHeightPercent / 100) * containerHeight
        });
      }
    }
  }

  return areas;
}

const generatedAreas = generateAreas(numRows, numCols, areaWidthPercent, areaHeightPercent, containerWidth, containerHeight);
console.log(generatedAreas);
