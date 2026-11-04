
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="container not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">← Back to all courses</Link>
    </main>
  );
}
