import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

export default function Home() {
  const books = useSelector((state) => state.books);

  return (
    <div className="container">
      <h1>Welcome to the Online Library</h1>

      <h2>Categories</h2>
      <div className="categories">
        <Link to="/books/Fiction">Fiction</Link>
        <Link to="/books/Non-Fiction">Non-Fiction</Link>
        <Link to="/books/Sci-Fi">Sci-Fi</Link>
      </div>

      <h2>Popular Books</h2>
      {books.slice(0, 2).map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}