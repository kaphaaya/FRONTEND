import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/courses/${course.slug}`} className="course-card">
      <span className={`category-badge ${course.category.toLowerCase()}`}>
        {course.category}
      </span>

      <h3>{course.title}</h3>

      <p className="course-duration">{course.duration}</p>

      <span className="card-link">View course →</span>
    </Link>
  );
}