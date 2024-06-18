const courses = [
  {
    id: 1,
    type: 'A',
    title: 'Curso A',
    code: 'A123',
    subject: 'Materia A',
    prerequisite: { code: 'A123', subject: 'Prerequisito A', type: 'PRE-REQUISITO' },
    description: 'Descripción del Curso A',
  },
  {
    id: 2,
    type: 'B',
    title: 'Curso B',
    code: 'B123',
    subject: 'Materia B',
    prerequisite: { code: 'B123', subject: 'Prerequisito B', type: 'PRE-REQUISITO' },
    description: 'Descripción del Curso B',
  },
  {
    id: 3,
    type: 'C',
    title: 'Curso C',
    code: 'C123', // Cambiado para ser único
    subject: 'Materia C', // Cambiado para ser único
    prerequisite: { code: 'C123', subject: 'Prerequisito C', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso C',
  },
  {
    id: 4,
    type: 'D',
    title: 'Curso D',
    code: 'D123', // Cambiado para ser único
    subject: 'Materia D', // Cambiado para ser único
    prerequisite: { code: 'D123', subject: 'Prerequisito D', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso D',
  },
  {
    id: 5,
    type: 'E',
    title: 'Curso E',
    code: 'E123', // Cambiado para ser único
    subject: 'Materia E', // Cambiado para ser único
    prerequisite: { code: 'E123', subject: 'Prerequisito E', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso E',
  },
  {
    id: 6,
    type: 'F',
    title: 'Curso F',
    code: 'F123', // Cambiado para ser único
    subject: 'Materia F', // Cambiado para ser único
    prerequisite: { code: 'F123', subject: 'Prerequisito F', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso F',
  },
  {
    id: 7,
    type: 'G',
    title: 'Curso G',
    code: 'G123', // Cambiado para ser único
    subject: 'Materia G', // Cambiado para ser único
    prerequisite: { code: 'G123', subject: 'Prerequisito G', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso G',
  },
  {
    id: 8,
    type: 'H',
    title: 'Curso H',
    code: 'H123', // Cambiado para ser único
    subject: 'Materia H', // Cambiado para ser único
    prerequisite: { code: 'H123', subject: 'Prerequisito H', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso H',
  },
  {
    id: 9,
    type: 'I',
    title: 'Curso I',
    code: 'I123', // Cambiado para ser único
    subject: 'Materia I', // Cambiado para ser único
    prerequisite: { code: 'I123', subject: 'Prerequisito I', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso I',
  },
  {
    id: 10,
    type: 'J',
    title: 'Curso J',
    code: 'J123', // Cambiado para ser único
    subject: 'Materia J', // Cambiado para ser único
    prerequisite: { code: 'J123', subject: 'Prerequisito J', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso J',
  },
  {
    id: 11,
    type: 'K',
    title: 'Curso K',
    code: 'K123', // Cambiado para ser único
    subject: 'Materia K', // Cambiado para ser único
    prerequisite: { code: 'K123', subject: 'Prerequisito K', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso K',
  },
  {
    id: 12,
    type: 'L',
    title: 'Curso L',
    code: 'L123', // Cambiado para ser único
    subject: 'Materia L', // Cambiado para ser único
    prerequisite: { code: 'L123', subject: 'Prerequisito L', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso L',
  },
  {
    id: 13,
    type: 'M',
    title: 'Curso M',
    code: 'M123', // Cambiado para ser único
    subject: 'Materia M', // Cambiado para ser único
    prerequisite: { code: 'M123', subject: 'Prerequisito M', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso M',
  },
  {
    id: 14,
    type: 'N',
    title: 'Curso N',
    code: 'N123', // Cambiado para ser único
    subject: 'Materia N', // Cambiado para ser único
    prerequisite: { code: 'N123', subject: 'Prerequisito N', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso N',
  },
  {
    id: 15,
    type: 'O',
    title: 'Curso O',
    code: 'O123', // Cambiado para ser único
    subject: 'Materia O', // Cambiado para ser único
    prerequisite: { code: 'O123', subject: 'Prerequisito O', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso O',
  },
  {
    id: 16,
    type: 'P',
    title: 'Curso P',
    code: 'P123', // Cambiado para ser único
    subject: 'Materia P', // Cambiado para ser único
    prerequisite: { code: 'P123', subject: 'Prerequisito P', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso P',
  },
  {
    id: 17,
    type: 'Q',
    title: 'Curso Q',
    code: 'Q123', // Cambiado para ser único
    subject: 'Materia Q', // Cambiado para ser único
    prerequisite: { code: 'Q123', subject: 'Prerequisito Q', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso Q',
  },
  {
    id: 18,
    type: 'R',
    title: 'Curso R',
    code: 'R123', // Cambiado para ser único
    subject: 'Materia R', // Cambiado para ser único
    prerequisite: { code: 'R123', subject: 'Prerequisito R', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso R',
  },
  {
    id: 19,
    type: 'FF',
    title: 'Curso FF',
    code: 'FF123', // Cambiado para ser único
    subject: 'Materia FF', // Cambiado para ser único
    prerequisite: { code: 'FF123', subject: 'Prerequisito FF', type: 'PRE-REQUISITO' }, // Cambiado para ser único
    description: 'Descripción del Curso FF',
  },
];

export default courses;
