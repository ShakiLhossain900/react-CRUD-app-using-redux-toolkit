import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AddBook from "../fetaures/books/AddBook";
// import BooksView from "../fetaures/books/BooksView";
// import EditBook from "../fetaures/books/EditBook";
// import Navbar from "../layouts/Navbar";
// import Error from "../pages/ErrorPage";
// import Home from "../pages/Home";
import AddBook from "../features/books/AddBooks";
import BooksView from "../features/books/BooksView";
import EditBook from "../features/books/EditBook";
import Navbar from "../layouts/Navbar";
import Error from "../pages/ErrorPage";
import Home from "../pages/Home";


const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;