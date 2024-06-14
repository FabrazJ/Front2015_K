import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const courses = [
  { code: 'MATG1048', name: 'Ecuaciones Diferenciales y Álgebra Lineal', prereqs: ['Cálculo Vectorial', 'Fundamentos de Programación'], description: 'Este curso transversal está dirigido...' }

  
];

const CourseModal = ({ show, handleClose, course }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{course.name}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p><strong>Código:</strong> {course.code}</p>
      <p><strong>Requisitos:</strong> {course.prereqs.join(', ')}</p>
      <p>{course.description}</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>
);

const CourseList = () => {
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (course) => {
    setSelectedCourse(course);
    setShow(true);
  };

  return (
    <div className="container">
      <h1>Course List</h1>
      <ul className="list-group">
        {courses.map(course => (
          <li key={course.code} className="list-group-item">
            <Button variant="link" onClick={() => handleShow(course)}>
              {course.name}
            </Button>
          </li>
        ))}
      </ul>

      {selectedCourse && (
        <CourseModal show={show} handleClose={handleClose} course={selectedCourse} />
      )}
    </div>
  );
};

export default CourseList;
