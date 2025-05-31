const express = require('express');
const router = express.Router();

router.post('/cikis', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Session destroy error:', err);
      return res.status(500).json({ error: 'Çıkış yapılamadı' });
    }
    res.clearCookie('connect.sid');
    res.json({ message: 'Çıkış başarılı' });
  });
});

module.exports = router;
