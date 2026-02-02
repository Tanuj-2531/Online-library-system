import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link to={`/book/${book.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}