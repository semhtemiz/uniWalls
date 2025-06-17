const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();

// CORS yapılandırması
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));
app.use(express.json());

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Veritabanı bağlantısı
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // phpMyAdmin şifren
  database: 'uniwalls_db'
});

// Input validasyonu middleware'leri
const validateRegistration = [
  body('name').trim().isLength({ min: 3 }).escape(),
  body('eposta').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('universite_id').notEmpty()
];

const validateLogin = [
  body('eposta').isEmail().normalizeEmail(),
  body('password').notEmpty()
];

// Profil güncelleme validasyonu
const validateProfileUpdate = [
  body('name').optional().trim().isLength({ min: 3 }).escape(),
  body('eposta').optional().isEmail().normalizeEmail(),
  body('universite_id').optional().notEmpty(),
  body('currentPassword').optional().notEmpty(),
  body('newPassword').optional().isLength({ min: 6 })
];

// Email gönderici yapılandırması
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Şifre sıfırlama token'ı oluştur
const createPasswordResetToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Görsel yükleme yapılandırması
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Sadece resim dosyaları yüklenebilir!'));
  }
});

// Kayıt
app.post('/api/kayit', validateRegistration, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, eposta, password, universite_id } = req.body;
    // Şifreyi hash'le
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO uyeler (name, eposta, password, universite_id) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, eposta, hashedPassword, universite_id], (err, result) => {
      if (err) {
        console.log('Kayıt DB hatası:', err);
        return res.status(500).json({ error: err.message });
      }
      // JWT token oluştur
      const token = jwt.sign({ id: result.insertId, name }, JWT_SECRET, { expiresIn: '24h' });
      res.json({ 
        message: "Kayıt başarılı", 
        id: result.insertId,
        token 
      });
    });
  } catch (error) {
    console.error('Kayıt hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Giriş
app.post('/api/giris', validateLogin, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { eposta, password } = req.body;
    const sql = "SELECT * FROM uyeler WHERE eposta = ?";
    db.query(sql, [eposta], async (err, results) => {
      if (err) {
        console.log('Giriş DB hatası:', err);
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(401).json({ error: "Kullanıcı bulunamadı" });
      }
      const user = results[0];
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ error: "Şifre yanlış" });
      }
      // JWT token oluştur
      const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, { expiresIn: '24h' });
      res.json({ 
        message: "Giriş başarılı", 
        user: {
          id: user.id,
          name: user.name,
          eposta: user.eposta,
          universite_id: user.universite_id
        },
        token 
      });
    });
  } catch (error) {
    console.error('Giriş hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Token doğrulama middleware'i
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Yetkilendirme token\'ı gerekli' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Geçersiz token' });
    }
    req.user = user;
    next();
  });
};

// Test endpoint'i
app.get('/api/test', authenticateToken, (req, res) => {
  res.json({ message: 'API çalışıyor', user: req.user });
});

// Profil bilgilerini getir
app.get('/api/profile', authenticateToken, async (req, res) => {
  try {
    const sql = "SELECT id, name, eposta, universite_id, created_at FROM uyeler WHERE id = ?";
    db.query(sql, [req.user.id], (err, results) => {
      if (err) {
        console.error('Profil getirme hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }
      if (results.length === 0) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
      }
      res.json(results[0]);
    });
  } catch (error) {
    console.error('Profil getirme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Profil güncelle
app.put('/api/profile', authenticateToken, validateProfileUpdate, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, eposta, universite_id, currentPassword, newPassword } = req.body;
    const updates = [];
    const values = [];

    // Mevcut kullanıcı bilgilerini al
    const getUserSql = "SELECT * FROM uyeler WHERE id = ?";
    db.query(getUserSql, [req.user.id], async (err, results) => {
      if (err) {
        console.error('Kullanıcı getirme hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      const user = results[0];

      // Şifre değişikliği kontrolü
      if (currentPassword && newPassword) {
        const validPassword = await bcrypt.compare(currentPassword, user.password);
        if (!validPassword) {
          return res.status(401).json({ error: 'Mevcut şifre yanlış' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        updates.push("password = ?");
        values.push(hashedPassword);
      }

      // Diğer alan güncellemeleri
      if (name) {
        updates.push("name = ?");
        values.push(name);
      }
      if (eposta) {
        updates.push("eposta = ?");
        values.push(eposta);
      }
      if (universite_id) {
        updates.push("universite_id = ?");
        values.push(universite_id);
      }

      if (updates.length === 0) {
        return res.status(400).json({ error: 'Güncellenecek alan belirtilmedi' });
      }

      values.push(req.user.id);
      const sql = `UPDATE uyeler SET ${updates.join(', ')} WHERE id = ?`;
      
      db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Profil güncelleme hatası:', err);
          return res.status(500).json({ error: 'Veritabanı hatası' });
        }
        res.json({ message: 'Profil başarıyla güncellendi' });
      });
    });
  } catch (error) {
    console.error('Profil güncelleme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Hesap silme
app.delete('/api/profile', authenticateToken, async (req, res) => {
  try {
    const sql = "DELETE FROM uyeler WHERE id = ?";
    db.query(sql, [req.user.id], (err, result) => {
      if (err) {
        console.error('Hesap silme hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }
      res.json({ message: 'Hesap başarıyla silindi' });
    });
  } catch (error) {
    console.error('Hesap silme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Şifre sıfırlama isteği
app.post('/api/reset-password-request', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Kullanıcıyı bul
    const sql = "SELECT * FROM uyeler WHERE eposta = ?";
    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error('Şifre sıfırlama hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Bu email adresi ile kayıtlı kullanıcı bulunamadı' });
      }

      const user = results[0];
      const resetToken = createPasswordResetToken();
      const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 saat geçerli

      // Token'ı veritabanına kaydet
      const updateSql = "UPDATE uyeler SET reset_token = ?, reset_token_expiry = ? WHERE id = ?";
      db.query(updateSql, [resetToken, resetTokenExpiry, user.id], (err) => {
        if (err) {
          console.error('Token kaydetme hatası:', err);
          return res.status(500).json({ error: 'Veritabanı hatası' });
        }

        // Email gönder
        const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:3000'}/reset-password/${resetToken}`;
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Şifre Sıfırlama',
          html: `
            <p>Şifrenizi sıfırlamak için aşağıdaki bağlantıya tıklayın:</p>
            <a href="${resetUrl}">${resetUrl}</a>
            <p>Bu bağlantı 1 saat süreyle geçerlidir.</p>
          `
        };

        transporter.sendMail(mailOptions, (error) => {
          if (error) {
            console.error('Email gönderme hatası:', error);
            return res.status(500).json({ error: 'Email gönderilemedi' });
          }
          res.json({ message: 'Şifre sıfırlama bağlantısı email adresinize gönderildi' });
        });
      });
    });
  } catch (error) {
    console.error('Şifre sıfırlama hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Şifre sıfırlama
app.post('/api/reset-password', async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    // Token'ı kontrol et
    const sql = "SELECT * FROM uyeler WHERE reset_token = ? AND reset_token_expiry > NOW()";
    db.query(sql, [token], async (err, results) => {
      if (err) {
        console.error('Token kontrol hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      if (results.length === 0) {
        return res.status(400).json({ error: 'Geçersiz veya süresi dolmuş token' });
      }

      const user = results[0];
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Şifreyi güncelle ve token'ı temizle
      const updateSql = "UPDATE uyeler SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE id = ?";
      db.query(updateSql, [hashedPassword, user.id], (err) => {
        if (err) {
          console.error('Şifre güncelleme hatası:', err);
          return res.status(500).json({ error: 'Veritabanı hatası' });
        }
        res.json({ message: 'Şifreniz başarıyla güncellendi' });
      });
    });
  } catch (error) {
    console.error('Şifre sıfırlama hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Email doğrulama
app.post('/api/verify-email', async (req, res) => {
  try {
    const { token } = req.body;

    // Token'ı kontrol et
    const sql = "SELECT * FROM uyeler WHERE verification_token = ?";
    db.query(sql, [token], async (err, results) => {
      if (err) {
        console.error('Token kontrol hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      if (results.length === 0) {
        return res.status(400).json({ error: 'Geçersiz token' });
      }

      const user = results[0];

      // Email'i doğrula
      const updateSql = "UPDATE uyeler SET email_verified = true, verification_token = NULL WHERE id = ?";
      db.query(updateSql, [user.id], (err) => {
        if (err) {
          console.error('Email doğrulama hatası:', err);
          return res.status(500).json({ error: 'Veritabanı hatası' });
        }
        res.json({ message: 'Email adresiniz başarıyla doğrulandı' });
      });
    });
  } catch (error) {
    console.error('Email doğrulama hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Yorum ekleme
// Yorum ekleme
app.post('/api/yorumlar', authenticateToken, upload.single('image'), async (req, res) => {
  try {
    // 1. req.body'den 'title'ı alın
    const { content, title } = req.body; 
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    // 2. INSERT sorgusunu 'title' sütununu içerecek şekilde güncelleyin
    //    'title' sütununu hem sütun adları listesine hem de VALUES listesine eklemelisiniz.
    const sql = "INSERT INTO yorumlar (user_id, content, image_url, title) VALUES (?, ?, ?, ?)"; 
    
    // 3. Değerler dizisine 'title'ı ekleyin
    db.query(sql, [req.user.id, content, imageUrl, title], (err, result) => { 
      if (err) {
        console.error('Yorum ekleme hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      // Yorum başarıyla eklendikten sonra, eklenen yorumu geri döndürürken de
      // 'title'ın seçildiğinden emin olun (y.* zaten tüm sütunları seçer, sorun yok)
      const getCommentSql = `
        SELECT y.*, u.name as user_name, u.universite_id 
        FROM yorumlar y 
        JOIN uyeler u ON y.user_id = u.id 
        WHERE y.id = ?
      `;
      db.query(getCommentSql, [result.insertId], (err, results) => {
        if (err) {
          console.error('Yorumu geri getirme hatası:', err); // Daha spesifik hata mesajı
          return res.status(500).json({ error: 'Veritabanı hatası' });
        }
        res.json(results[0]);
      });
    });
  } catch (error) {
    console.error('Yorum ekleme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Yorumları getir
app.get('/api/yorumlar', async (req, res) => {
  try {
    const { page = 1, limit = 10, universite_id } = req.query;
    const offset = (page - 1) * limit;

    let sql = `
      SELECT y.*, u.name as user_name, u.universite_id,
      (SELECT COUNT(*) FROM begeniler WHERE yorum_id = y.id) as like_count,
      (SELECT COUNT(*) FROM yanitlar WHERE yorum_id = y.id) as reply_count
      FROM yorumlar y 
      JOIN uyeler u ON y.user_id = u.id
    `;
    const params = [];

    if (universite_id) {
      sql += " WHERE u.universite_id = ?";
      params.push(universite_id);
    }

    sql += " ORDER BY y.created_at DESC LIMIT ? OFFSET ?";
    params.push(parseInt(limit), offset);

    db.query(sql, params, (err, results) => {
      if (err) {
        console.error('Yorum getirme hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }
      res.json(results);
    });
  } catch (error) {
    console.error('Yorum getirme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Yorum güncelle
app.put('/api/yorumlar/:id', authenticateToken, async (req, res) => {
  try {
    const { content } = req.body;
    const yorumId = req.params.id;

    // Yorumun sahibi olduğunu kontrol et
    const checkSql = "SELECT * FROM yorumlar WHERE id = ? AND user_id = ?";
    db.query(checkSql, [yorumId, req.user.id], (err, results) => {
      if (err) {
        console.error('Yorum kontrol hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      if (results.length === 0) {
        return res.status(403).json({ error: 'Bu yorumu düzenleme yetkiniz yok' });
      }

      const updateSql = "UPDATE yorumlar SET content = ? WHERE id = ?";
      db.query(updateSql, [content, yorumId], (err) => {
        if (err) {
          console.error('Yorum güncelleme hatası:', err);
          return res.status(500).json({ error: 'Veritabanı hatası' });
        }
        res.json({ message: 'Yorum başarıyla güncellendi' });
      });
    });
  } catch (error) {
    console.error('Yorum güncelleme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Yorum sil
app.delete('/api/yorumlar/:id', authenticateToken, async (req, res) => {
  try {
    const yorumId = req.params.id;

    // Yorumun sahibi olduğunu kontrol et
    const checkSql = "SELECT * FROM yorumlar WHERE id = ? AND user_id = ?";
    db.query(checkSql, [yorumId, req.user.id], (err, results) => {
      if (err) {
        console.error('Yorum kontrol hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      if (results.length === 0) {
        return res.status(403).json({ error: 'Bu yorumu silme yetkiniz yok' });
      }

      const deleteSql = "DELETE FROM yorumlar WHERE id = ?";
      db.query(deleteSql, [yorumId], (err) => {
        if (err) {
          console.error('Yorum silme hatası:', err);
          return res.status(500).json({ error: 'Veritabanı hatası' });
        }
        res.json({ message: 'Yorum başarıyla silindi' });
      });
    });
  } catch (error) {
    console.error('Yorum silme hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Beğeni ekle/kaldır
app.post('/api/yorumlar/:id/begeni', authenticateToken, async (req, res) => {
  try {
    const yorumId = req.params.id;

    // Beğeni var mı kontrol et
    const checkSql = "SELECT * FROM begeniler WHERE user_id = ? AND yorum_id = ?";
    db.query(checkSql, [req.user.id, yorumId], (err, results) => {
      if (err) {
        console.error('Beğeni kontrol hatası:', err);
        return res.status(500).json({ error: 'Veritabanı hatası' });
      }

      if (results.length > 0) {
        // Beğeniyi kaldır
        const deleteSql = "DELETE FROM begeniler WHERE user_id = ? AND yorum_id = ?";
        db.query(deleteSql, [req.user.id, yorumId], (err) => {
          if (err) {
            console.error('Beğeni silme hatası:', err);
            return res.status(500).json({ error: 'Veritabanı hatası' });
          }
          res.json({ message: 'Beğeni kaldırıldı', liked: false });
        });
      } else {
        // Beğeni ekle
        const insertSql = "INSERT INTO begeniler (user_id, yorum_id) VALUES (?, ?)";
        db.query(insertSql, [req.user.id, yorumId], (err) => {
          if (err) {
            console.error('Beğeni ekleme hatası:', err);
            return res.status(500).json({ error: 'Veritabanı hatası' });
          }
          res.json({ message: 'Beğeni eklendi', liked: true });
        });
      }
    });
  } catch (error) {
    console.error('Beğeni işlemi hatası:', error);
    res.status(500).json({ error: 'Sunucu hatası' });
  }
});

// Üniversiteleri listele
app.get('/api/universiteler', (req, res) => {
  const sql = 'SELECT id, ad FROM universiteler ORDER BY ad ASC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Üniversite listesi hatası:', err);
      return res.status(500).json({ error: 'Veritabanı hatası' });
    }
    res.json(results);
  });
});

// Statik dosya servisi
app.use('/uploads', express.static('uploads'));

// Global hata yakalama
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Sunucu hatası' });
});

app.listen(5000, () => {
  console.log("✅ Backend çalışıyor: http://localhost:5000");
});
