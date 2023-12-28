import { db } from "../config/db.js";

export const createBlogController = async (req, res) => {
  try {
    let data = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    };
    let query = "insert into blog_posts SET ?";
    db.query(query, data, (err, result) => {
      if (err) {
        res.status(301).send({
          success: false,
          message: "Error in cammand",
          err,
        });
      } else {
        res.send({
          success: true,
          message: "Blog created Successfully",
          result,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Inetrnal server Error",
      error,
    });
  }
};
export const getBlogController = async (req, res) => {
  try {
    let query = "select * from blog_posts";
    db.query(query, (err, result) => {
      if (err) {
        res.send({
          err,
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Blog get Successfully",
          result,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Inetrnal server Error",
      error,
    });
  }
};
export const getSingleBlogController = async (req, res) => {
  try {
    let query = `select * from blog_posts where post_id=${req.params.id}`;
    db.query(query, (err, result) => {
      if (err) {
        res.send({
          err,
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Blog get Successfully",
          result,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Inetrnal server Error",
      error,
    });
  }
};
export const deleteBlogController = async (req, res) => {
  try {
    let query = `delete from blog_posts where post_id=${req.params.id}`;
    db.query(query, (err, result) => {
      if (err) {
        res.send({
          err,
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Blog Delete Successfully",
          result,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Inetrnal server Error",
      error,
    });
  }
};
export const updateBlogController = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const { id } = req.params;
    let query = `UPDATE blog_posts 
    SET title = ?, content = ?, author = ? 
    WHERE post_id = ?`;
    db.query(query, [title, content, author, id], (err, result) => {
      if (err) {
        res.send({
          err,
        });
      } else {
        res.status(200).send({
          success: true,
          message: "Blog Updated Successfully",
          result,
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Inetrnal server Error",
      error,
    });
  }
};
