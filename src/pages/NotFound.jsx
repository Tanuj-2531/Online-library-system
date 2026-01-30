import { useLocation, Link } from "react-router-dom";
export default function NotFound() {
  const loc = useLocation();
  return (
    <div>
      <h1>404</h1>
      <p>{loc.pathname} not found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}