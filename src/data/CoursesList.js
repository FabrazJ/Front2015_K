import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching the courses:', error);
      });
  }, []);

  return (
    <div>
      <h1>Courses List</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <small>Code: {course.code}, Subject: {course.subject}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
