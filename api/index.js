const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config();
app.use(cookieParser());


const checkAdmin = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({error: 'Unauthorized'});
  }

  jwt.verify(token, '2d25c774bfd01c3e8ab232c13b82fb123bf5f62884d29219e9cba47cc309a317', {algorithms: ['HS256']}, (err, decoded) => {
    if (err) {
      return res.status(401).json({error: 'Invalid token'});
    }
    console.log("decoded => ", decoded);

    if (decoded.role != 'admin') {
      return res.status(403).json({error: 'Permission denied'});
    }
    next();
  });
};

app.get("/todo", checkAdmin, (req, res) => {
  console.log("process.env.SECRET_KEY => ",process.env.SECRET_KEY);
  res.json([
    {id: 1, text: "First Todo"},
    {id: 2, text: "Second Todo"},
    {id: 3, text: "Third Todo"},
  ]);
});


module.exports = {
  path: "/api",
  handler: app
}
