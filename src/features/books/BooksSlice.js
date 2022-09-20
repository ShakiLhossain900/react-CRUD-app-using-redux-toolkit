// import { createSlice } from "@reduxjs/toolkit"; changes to the next line
const { createSlice } = require("@reduxjs/toolkit");


const initialBooks = {
  books: [
    { id: '1', title: "History of SS BlockChainIT", author: "Gazi Shakil" },
    { id: '2', title: "Love Bangladesh", author: "Shamima akter" },

  ],
};


export const booksSlice = createSlice({
    name: "books", 
    initialState:initialBooks,
    reducers: {
        showBooks : (state) => state,  //reducer er vitor object akare ami akta akta kore object showBooks er vitor rakhbu and 
        addBooks: (state, action) =>{
          state.books.push(action.payload);
        }
      },

})

export const {showBooks, addBooks} =booksSlice.actions;
export default booksSlice.reducer;

///error books can't added to the book list