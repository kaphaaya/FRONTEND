import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <main className="not-found">
        <h1>404</h1>
        <h2>Course not found</h2>
        <p>
          There's no course at this URL. The link might be wrong
          or the course may no longer exist.
        </p>
        <button onClick={() => navigate("/")}>
          ← Back to all courses
        </button>
      </main>
    );
  }

  return (
    <main className="container detail-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="detail-eyebrow">
        <span className={`category-badge ${course.category.toLowerCase()}`}>
          {course.category}
        </span>
      </div>

      <h1>{course.title}</h1>

      <p className="detail-duration">{course.duration}</p>

      <p className="detail-description">{course.description}</p>

      <h2>Topics Covered</h2>

      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>
            <span className="topic-check">✓</span>
            {topic}
          </li>
        ))}
      </ul>
    </main>
  );
}