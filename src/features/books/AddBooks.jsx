import React, { useState } from "react";

const AddBooks = () => {
  const [title, setTitle] = useState();
  return (
    <div>
      <h2>Add your books</h2>
      <form>
        <div>
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
      </form>
    </div>
  );
};

export default AddBooks;
