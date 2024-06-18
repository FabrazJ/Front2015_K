import React, { useState } from 'react';
import {Card} from 'react-bootstrap'; 

import ModalA from '../../../modal/ModalA';
import ModalB from '../../../modal/ModalB';

import ModalC from '../../../modal/ModalC';
import ModalD from '../../../modal/ModalD';
import ModalE from '../../../modal/ModalE';
import ModalF from '../../../modal/ModalF';
import ModalG from '../../../modal/ModalG';


import courses from '../../../data/courses';
import areas from '../../../data/areas';
import ImagePrueba from '../../../img/MallaPrueba.jpeg';

const SemestresPrueba = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);
  
    const handleAreaClick = (courseId) => {
      const course = courses.find((course) => course.id === courseId);
      setSelectedCourse(course);
    };
  
    const handleClose = () => {
      setSelectedCourse(null);
    };
  
    const renderModal = () => {
        console.log('Selected Course:', selectedCourse);
      
        if (!selectedCourse) return null;
      
        switch (selectedCourse.type) {
          case 'A':
            return <ModalA course={selectedCourse} onClose={handleClose} />;
          case 'B':
            return <ModalB course={selectedCourse} onClose={handleClose} />;
          case 'C':
            return <ModalC course={selectedCourse} onClose={handleClose} />;
          case 'D':
            return <ModalD course={selectedCourse} onClose={handleClose} />;
          case 'E':
            return <ModalE course={selectedCourse} onClose={handleClose} />;
          case 'F':
            return <ModalF course={selectedCourse} onClose={handleClose} />;
          case 'G':
            return <ModalG course={selectedCourse} onClose={handleClose} />;
          default:
            return null;
        }
      };
  
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img src={ImagePrueba} alt="Descripción de la imagen" className="image" style={{ width: '100%' }} />
        {areas.map((area) => (
          <div
            key={area.id}
            onClick={() => handleAreaClick(area.courseId)}
            style={{
              position: 'absolute',
              top: area.top,
              left: area.left,
              width: area.width,
              height: area.height,
              cursor: 'pointer',
              border: '2px solid transparent',
            }}
          />
        ))}
        {renderModal()}
      </div>
    );
  };
  
  export default SemestresPrueba;