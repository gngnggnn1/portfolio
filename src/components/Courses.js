import React, { useState } from "react";
import CourseItem from "./CourseItem";
import courses from "../data/CoursesData";

function Courses() {
  const [showAll, setShowAll] = useState(false);
  const initialCourses = showAll ? courses : courses.slice(0, 2);

  return (
    <div>
      {initialCourses.map((course, index) => (
        <CourseItem key={index} course={course} />
      ))}
      {courses.length > 2 && (
        <button className="button resume-button" onClick={() => setShowAll(!showAll)}>
          {showAll ? "See Less" : "See All"}
        </button>
      )}
    </div>
  );
}

export default Courses;
