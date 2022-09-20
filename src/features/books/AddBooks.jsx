import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBooks from './BooksSlice'

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch()

//amader koto ta book ache amra ta dekte chacci and ata useSelector use kore dekte chacci
const numberOfBooks = useSelector((state)=>state.booksReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {id:numberOfBooks+1,title, author};
 
    dispatch(addBooks(book));

  }


  return (
    <div>
      <h2>Add your books</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};

export default AddBooks;
