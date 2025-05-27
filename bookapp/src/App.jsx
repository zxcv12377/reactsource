import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Loading from "./components/Loading";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";
import Error from "./components/Error";
import AddBook from "./pages/AddBook";

// http://localhost:5173/ => Home
// http://localhost:5173/add => AddBook
// http://localhost:5173/edit/{id} => EditBook
// http://localhost:5173/books/{id} => BookDetails
// 잘못된 경로 => Error

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
