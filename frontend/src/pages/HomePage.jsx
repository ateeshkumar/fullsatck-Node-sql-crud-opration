import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Loader from "../components/Loader";
import "./css/homepage.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/blog/get");
    if (result?.data?.success) {
      setData(result?.data?.result);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <Layout>
        <div className="home-container">
          {data ? (
            data.map((item) => (
              <div className="blog-card" key={item.post_id}>
                <p>{item.title}</p>
                <p>{item.author}</p>
                <button
                  className="btn"
                  onClick={() => navigate(`/blog/details/${item.post_id}`)}
                >
                  View Details
                </button>
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

export default HomePage;
