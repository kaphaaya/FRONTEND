
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
    <main className="container">
      <section className="hero">
        <p className="eyebrow">FILTERED COURSE COLLECTION</p>
        <h1>{category} Courses</h1>
        <p>{filteredCourses.length} courses matched</p>
      </section>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found in this category.</p>
        )}
      </div>
    </main>
  );
}
