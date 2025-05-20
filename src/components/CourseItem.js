import React from "react";

function CourseItem({ course }) {
  return (
    <div>
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      <p>Grade: {course.grade}</p>
    </div>
  );
}

export default CourseItem;
