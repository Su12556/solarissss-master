import PropTypes from 'prop-types';
import React, { useState } from 'react';

function Courses({ courses, selectedCourse, setSelectedCourse }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlur = () => {
    if (selectedCourse === "") {
      setErrorMessage("Please select a course.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div>
      <label htmlFor="courses">Choose a course:</label>
      <select
        id="courses"
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
        onBlur={handleBlur}
      >
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course.courseCode} value={course.courseCode}>
            {course.courseName}
          </option>
        ))}
      </select>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      courseCode: PropTypes.string.isRequired
    })
  ).isRequired,
  selectedCourse: PropTypes.string.isRequired,
  setSelectedCourse: PropTypes.func.isRequired,
};


// Mock GraphQL query
export const query = `
  query CoursesQuery {
    courses {
      courseName
      courseCode
    }
  }
`;

export const layout = {
  areaId: 'productPageMiddleRight',
  sortOrder: 10
};

export default Courses;
