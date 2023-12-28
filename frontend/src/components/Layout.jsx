import React from "react";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, title, description, keyword, author }) => {
  return (
    <>
      <div className="layout-container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keyword} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        {children}
        <Navbar />
        <ToastContainer />
      </div>
    </>
  );
};
Layout.defaultProps = {
  title: "Blog app",
  description: "Full stack development",
  keyword: "mern,react,node,nodejs",
  author: "ateesh kumar",
};

export default Layout;
