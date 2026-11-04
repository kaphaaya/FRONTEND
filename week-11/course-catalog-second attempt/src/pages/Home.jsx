
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">TechyJaunt Cohort 8</p>

        <h1>
          Learn at your
          <br />
          own pace.
        </h1>

        <p>
          Everything from HTML basics to advanced React patterns —
          structured, practical, and beginner-friendly.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>All Courses ({courses.length})</h2>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  );
}
