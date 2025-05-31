

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // phpMyAdmin şifren
  database: 'reacticin_veritabani'
});

// Kayıt
app.post('/api/kayit', (req, res) => {
  const { name, eposta, password, school } = req.body;
  const sql = "INSERT INTO uyeler (name, eposta, password, school) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, eposta, password, school], (err, result) => {
    if (err) {
      console.log('Kayıt DB hatası:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Kayıt başarılı", id: result.insertId });
  });
});

// Giriş
app.post('/api/giris', (req, res) => {
  const { name, password } = req.body;
  const sql = "SELECT * FROM uyeler WHERE name = ? AND password = ?";
  db.query(sql, [name, password], (err, results) => {
    if (err) {
      console.log('Giriş DB hatası:', err);
      return res.status(500).json({ error: err.message });
    }
    if (results.length > 0) {
      res.json({ message: "Giriş başarılı", user: results[0] });
    } else {
      res.status(401).json({ error: "Kullanıcı adı veya şifre yanlış" });
    }
  });
});

app.get('/api/test', (req, res) => {
  res.send('API çalışıyor');
});

app.listen(5000, () => {
  console.log("✅ Backend çalışıyor: http://localhost:5000");
});
