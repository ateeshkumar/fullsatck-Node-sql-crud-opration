import React, { useState } from "react";
import Layout from "../components/Layout";
import "./css/createpost.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const formData = {
    title: title,
    content: content,
    author: author,
  };
  console.log(formData);
  const createblog = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "http://localhost:8080/api/v1/blog/create",
      formData
    );
    if (data?.data?.success) {
      toast.success("post Created Successfully");
      navigate("/");
    }
  };
  return (
    <>
      <Layout>
        <div className="form-container">
          <h1>Create Post</h1>
          <form onSubmit={createblog}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Blog Title"
            />
            <textarea
              cols="30"
              rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter Content"
            ></textarea>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter your Name"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default CreatePost;
