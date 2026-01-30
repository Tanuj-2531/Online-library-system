import { Link } from "react-router-dom";
import books from "../data/booksData";
import BookCard from "../components/BookCard";

export default function Home() {
  return (
    <div>
      <h1>Online Library</h1>
      <h2>Categories</h2>
      <Link to="/books/Fiction">Fiction</Link> | 
      <Link to="/books/Non-Fiction">Non-Fiction</Link> | 
      <Link to="/books/Sci-Fi">Sci-Fi</Link>
      <h2>Popular Books</h2>
      {books.slice(0,2).map(b => <BookCard key={b.id} book={b}/>)}
    </div>
  );
}