import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="container">
      <h1>404 - Page Not Found</h1>
      <p>No match for: {location.pathname}</p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}