// routes/register.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/kayit', (req, res) => {
  const { name, eposta, password, school } = req.body;
  const sql = "INSERT INTO uyeler (name, eposta, password, school) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, eposta, password, school], (err, result) => {
    if (err) {
      console.error('Kayıt DB hatası:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: "Kayıt başarılı", id: result.insertId });
  });
});

module.exports = router;
