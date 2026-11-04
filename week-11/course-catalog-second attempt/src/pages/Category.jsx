
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Category() {
  const { category } = useParams();

  const filteredCourses = courses.filter(
    (course) =>
      course.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Course Collection</p>
        <h1>{category} Courses</h1>
        <p>
          {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""} available
        </p>
      </section>

      <section className="section">
        {filteredCourses.length > 0 ? (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p style={{ color: "var(--muted-text)" }}>No courses found in this category.</p>
        )}
      </section>
    </main>
  );
}
