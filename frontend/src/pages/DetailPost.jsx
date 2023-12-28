import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import "./css/blogdetails.css";
import { toast } from "react-toastify";

const DetailPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const blogDetals = async (id) => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/blog/get/${id}`
    );
    if (result?.data?.success) {
      setData(result?.data?.result);
    }
  };
  const deleteBlog = async (id) => {
    const result = await axios.delete(
      `http://localhost:8080/api/v1/blog/delete/${id}`
    );
    if (result?.data?.success) {
      navigate("/");
      toast.success("Deleted Successfully");
    } else {
      toast.error("Something Went Wrong!!");
    }
  };
  useEffect(() => {
    blogDetals(id);
    console.log(data);
  }, [id]);
  console.log(data);
  return (
    <>
      <Layout>
        <div className="details-blog-container">
          {data ? (
            data.map((item) => (
              <div className="card-details" key={item.post_id}>
                <h1>{item?.title}</h1>
                <p>{item?.content}</p>
                <h4>Written By: {item?.author}</h4>
                <div className="details-btn">
                  <button
                    className="btn"
                    onClick={() => navigate(`/update-blog/${item.post_id}`)}
                  >
                    Update Blog
                  </button>
                  <button
                    className="btn"
                    style={{ background: "#f93702" }}
                    onClick={() => deleteBlog(item.post_id)}
                  >
                    Delete Blog
                  </button>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </Layout>
    </>
  );
};

export default DetailPost;
