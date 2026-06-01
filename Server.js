const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = require("./db.js");


// REGISTER
app.post("/register", (req, res) => {

  console.log(req.body);

  const { username, password } = req.body;

  const sql =
    "INSERT INTO users (username, password) VALUES (?, ?)";

  db.query(sql, [username, password], (err, result) => {

    if (err) {

      console.log(err);

      res.send("Registration Failed");

    } else {

      console.log("Inserted");

      res.send("Registration Successful");
    }

  });

});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE username = ? AND password = ?";

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      res.send({ success: false });
    } else {
      if (result.length > 0) {
        res.send({
          success: true,
          username: result[0].username
        });
      } else {
        res.send({
          success: false,
          message: "Invalid Username or Password"
        });
      }
    }
  });
});


app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});