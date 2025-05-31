const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/giris', (req, res) => {
  const { name, password } = req.body;
  const sql = "SELECT * FROM uyeler WHERE name = ? AND password = ?";
  db.query(sql, [name, password], (err, results) => {
    if (err) {
      console.error('Giriş DB hatası:', err);
      return res.status(500).json({ error: err.message });
    }
    if (results.length > 0) {
      req.session.user = results[0];  // session'a kaydet
      res.json({ message: "Giriş başarılı", user: results[0] });
    } else {
      res.status(401).json({ error: "Kullanıcı adı veya şifre yanlış" });
    }
  });
});

module.exports = router;
