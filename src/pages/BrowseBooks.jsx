import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(s => s.books);
  const [search, setSearch] = useState("");

  const filtered = books.filter(b =>
    (!category || b.category === category) &&
    (b.title.toLowerCase().includes(search.toLowerCase()) ||
     b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <input placeholder="Search" onChange={e=>setSearch(e.target.value)}/>
      {filtered.map(b => <BookCard key={b.id} book={b}/>)}
    </div>
  );
}