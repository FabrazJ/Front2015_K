const courses = [
  {
    id: 1,
    type: 'A',
    title: 'Curso A',
    code: 'A123',
    subject: 'Materia A',
    prerequisite: { code: 'P123', subject: 'Prerequisito A', type: 'PRE-REQUISITO' },
    description: 'Descripción del Curso A',
  },
  {
    id: 2,
    type: 'B',
    title: 'Curso B',
    code: 'B123',
    subject: 'Materia B',
    prerequisite: { code: 'Q123', subject: 'Prerequisito B', type: 'PRE-REQUISITO' },
    description: 'Descripción del Curso B',
  },
  // Agrega más cursos según sea necesario
];

export default courses;
