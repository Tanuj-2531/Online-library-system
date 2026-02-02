import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/booksData";

const booksSlice = createSlice({
  name: "books",
  initialState: booksData, // 👈 using dummy data file
  reducers: {
    addBook: (state, action) => {
      state.unshift(action.payload); // new books appear at top
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;