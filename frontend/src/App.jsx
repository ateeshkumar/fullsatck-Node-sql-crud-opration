import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
import DetailPost from "./pages/DetailPost";
import UpdateBlog from "./pages/UpdateBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create/blog" element={<CreatePost />} />
        <Route path="/blog/details/:id" element={<DetailPost />} />
        <Route path="/update-blog/:id" element={<UpdateBlog />} />
      </Routes>
    </>
  );
}

export default App;
