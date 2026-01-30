import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../features/books/booksSlice";
import { useState } from "react";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({title:"",author:"",category:"",description:"",rating:""});

  const submit = e => {
    e.preventDefault();
    if(Object.values(form).some(v=>!v)) return alert("All fields required");
    dispatch(addBook({...form, id: Date.now()}));
    navigate("/books");
  };

  return (
    <form onSubmit={submit}>
      {Object.keys(form).map(k=>(
        <input key={k} placeholder={k} value={form[k]} onChange={e=>setForm({...form,[k]:e.target.value})}/>
      ))}
      <button>Add Book</button>
    </form>
  );
}