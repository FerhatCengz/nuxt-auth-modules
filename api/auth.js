const express = require('express');
const jwt = require('jsonwebtoken');
import cookieParser from 'cookie-parser';

const app = express();
// app.use(cookieParser())

// Sabit kullanıcı bilgileri
const users = [
  {id: 1, username: 'ferhat', password: '123', role: "admin"},
];

app.use(express.json());

// Login endpoint'i
app.post('/login', (req, res) => {
  const {username, password} = req.body;

  // Kullanıcı doğrulaması
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Başarılı giriş durumu
    const secretKey = '2d25c774bfd01c3e8ab232c13b82fb123bf5f62884d29219e9cba47cc309a317';
    const token = jwt.sign(user, secretKey, {expiresIn: '1m'});

    res.cookie('token', token, {httpOnly: true, secure: true});

    res.status(200).json({token, user});
  } else {
    // Başarısız giriş durumu
    res.status(401).json({error: 'Invalid credentials'});
  }
});

// Logout endpoint'i
app.post('/logout', (req, res) => {
  // Logout işlemleri burada gerçekleştirilebilir
  res.status(200).json({message: 'Logout successful'});
});

// User endpoint'i
app.post('/user', (req, res) => {
  // Token'dan kullanıcı bilgileri alınıp gönderilecek
  res.status(200).json({user: {id: 1, username: 'ferhat', role: "admin"}});
});

module.exports = {
  path: '/api/auth',
  handler: app
};
