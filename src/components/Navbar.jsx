import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/books">Browse</Link> | <Link to="/add-book">Add Book</Link>
    </nav>
  );
}