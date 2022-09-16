import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBooks from "../features/books/AddBooks";
import BooksView from "../features/books/BooksView";
import Navbar from "../layouts/Navbar";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/show-book"  element={<AddBooks/>}/>
        <Route path="/add-book"  element={<BooksView/>}/>
        <Route path="*"  element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
