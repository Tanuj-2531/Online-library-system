import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    rating: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => v === "")) {
      alert("All fields are required!");
      return;
    }

    dispatch(addBook({ id: Date.now(), ...form, rating: Number(form.rating) }));
    navigate("/books");
  };

  return (
    <div className="container">
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((field) => (
          <input
            key={field}
            type="text"
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}