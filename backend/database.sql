CREATE DATABASE IF NOT EXISTS uniwalls_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE uniwalls_db;

-- Üniversiteler tablosu
CREATE TABLE IF NOT EXISTS universiteler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ad VARCHAR(255) NOT NULL UNIQUE
);

-- Örnek üniversite verileri (tam liste daha sonra eklenecek)
INSERT INTO universiteler (ad) VALUES
('Boğaziçi Üniversitesi'),
('Orta Doğu Teknik Üniversitesi'),
('İstanbul Teknik Üniversitesi'),
('Hacettepe Üniversitesi'),
('Ege Üniversitesi'),
('Ankara Üniversitesi'),
('İstanbul Üniversitesi'),
('Yıldız Teknik Üniversitesi'),
('Dokuz Eylül Üniversitesi'),
('Marmara Üniversitesi');

-- Kullanıcılar tablosu
CREATE TABLE IF NOT EXISTS uyeler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    eposta VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    universite_id INT NULL,
    email_verified BOOLEAN DEFAULT FALSE,
    reset_token VARCHAR(255),
    reset_token_expiry DATETIME,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_universite FOREIGN KEY (universite_id) REFERENCES universiteler(id) ON DELETE SET NULL
);

-- Yorumlar tablosu
CREATE TABLE IF NOT EXISTS yorumlar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES uyeler(id) ON DELETE CASCADE
);

-- Beğeniler tablosu
CREATE TABLE IF NOT EXISTS begeniler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    yorum_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_like (user_id, yorum_id),
    FOREIGN KEY (user_id) REFERENCES uyeler(id) ON DELETE CASCADE,
    FOREIGN KEY (yorum_id) REFERENCES yorumlar(id) ON DELETE CASCADE
);

-- Yanıtlar tablosu
CREATE TABLE IF NOT EXISTS yanitlar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    yorum_id INT NOT NULL,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (yorum_id) REFERENCES yorumlar(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES uyeler(id) ON DELETE CASCADE
);

-- Mesajlar tablosu
CREATE TABLE IF NOT EXISTS mesajlar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES uyeler(id) ON DELETE CASCADE,
    FOREIGN KEY (receiver_id) REFERENCES uyeler(id) ON DELETE CASCADE
);

-- Bildirimler tablosu
CREATE TABLE IF NOT EXISTS bildirimler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type VARCHAR(50) NOT NULL,
    message TEXT,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES uyeler(id) ON DELETE CASCADE
); 