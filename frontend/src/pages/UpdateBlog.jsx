import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "./css/createpost.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const blogDetals = async (id) => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/blog/get/${id}`
    );
    if (result?.data?.success) {
      setData(result?.data?.result);
      console.log(result?.data?.result[0]);
      setTitle(result?.data?.result[0].title);
      setContent(result?.data?.result[0].content);
      setAuthor(result?.data?.result[0].author);
    }
  };
  useEffect(() => {
    blogDetals(id);
    console.log(data);
  }, [id]);

  const formData = {
    title: title,
    content: content,
    author: author,
  };
  const updateblog = async (e) => {
    e.preventDefault();
    const data = await axios.put(
      `http://localhost:8080/api/v1/blog/update/${id}`,
      formData
    );
    if (data?.data?.success) {
      toast.success("post Updated Successfully");
      navigate(`/blog/details/${id}`);
    }
  };
  return (
    <>
      <Layout title="Update Blog">
        <div className="form-container">
          <h1>Update Post</h1>
          {data ? (
            <form onSubmit={updateblog}>
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
                Update
              </button>
            </form>
          ) : (
            <Loader />
          )}
        </div>
      </Layout>
    </>
  );
};

export default UpdateBlog;
