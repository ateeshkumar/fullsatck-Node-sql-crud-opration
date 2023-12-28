import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.HOST || "localhost",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "",
  database: process.env.DATABASE || "crud",
});

export const connetDB = () => {
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("database connected successfully");
  });
};
