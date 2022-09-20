import React, { useState } from "react";

const AddBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
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
        <button>Add book</button>
      </form>
    </div>
  );
};

export default AddBooks;
