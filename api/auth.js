const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

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
    const token = jwt.sign(user, 'yourSecretKey', {expiresIn: '1m'});

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
app.get('/user', (req, res) => {
  // Token'dan kullanıcı bilgileri alınıp gönderilecek
  res.status(200).json({user: {id: 1, username: 'ferhat'}});
});

module.exports = {
  path: '/api/auth',
  handler: app
};
