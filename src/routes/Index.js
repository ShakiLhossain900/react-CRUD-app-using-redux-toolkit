import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="*"  element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
