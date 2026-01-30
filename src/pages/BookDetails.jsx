import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(s => s.books.find(b => b.id === Number(id)));
  if (!book) return <p>Not found</p>;
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/books">Back</Link>
    </div>
  );
}