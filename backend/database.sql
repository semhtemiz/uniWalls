CREATE DATABASE IF NOT EXISTS uniwalls_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE uniwalls_db;

-- Üniversiteler tablosu
CREATE TABLE IF NOT EXISTS universiteler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ad VARCHAR(255) NOT NULL UNIQUE
);

-- Örnek üniversite verileri (tam liste daha sonra eklenecek)
INSERT INTO universiteler (ad) VALUES
('Adnan Menderes Üniversitesi'),
('Afyon Kocatepe Üniversitesi'),
('Ağrı İbrahim Çeçen Üniversitesi'),
('Akdeniz Üniversitesi'),
('Aksaray Üniversitesi'),
('Amasya Üniversitesi'),
('Anadolu Üniversitesi'),
('Ankara Üniversitesi'),
('Ankara Hacı Bayram Veli Üniversitesi'),
('Ardahan Üniversitesi'),
('Artvin Çoruh Üniversitesi'),
('Atatürk Üniversitesi'),
('Aydın Adnan Menderes Üniversitesi'),
('Balıkesir Üniversitesi'),
('Bartın Üniversitesi'),
('Batman Üniversitesi'),
('Bayburt Üniversitesi'),
('Bilecik Şeyh Edebali Üniversitesi'),
('Boğaziçi Üniversitesi'),
('Bolu Abant İzzet Baysal Üniversitesi'),
('Burdur Mehmet Akif Ersoy Üniversitesi'),
('Bursa Teknik Üniversitesi'),
('Çanakkale Onsekiz Mart Üniversitesi'),
('Çankırı Karatekin Üniversitesi'),
('Çukurova Üniversitesi'),
('Dicle Üniversitesi'),
('Düzce Üniversitesi'),
('Ege Üniversitesi'),
('Erciyes Üniversitesi'),
('Erzincan Binali Yıldırım Üniversitesi'),
('Erzurum Teknik Üniversitesi'),
('Eskişehir Osmangazi Üniversitesi'),
('Fırat Üniversitesi'),
('Galatasaray Üniversitesi'),
('Gazi Üniversitesi'),
('Gaziantep Üniversitesi'),
('Gebze Teknik Üniversitesi'),
('Hacettepe Üniversitesi'),
('Hakkari Üniversitesi'),
('Iğdır Üniversitesi'),
('İnönü Üniversitesi'),
('İstanbul Üniversitesi'),
('İstanbul Teknik Üniversitesi'),
('İzmir Katip Çelebi Üniversitesi'),
('İzmir Yüksek Teknoloji Enstitüsü'),
('Kafkas Üniversitesi'),
('Kahramanmaraş Sütçü İmam Üniversitesi'),
('Karabük Üniversitesi'),
('Karadeniz Teknik Üniversitesi'),
('Karamanoğlu Mehmetbey Üniversitesi'),
('Kırıkkale Üniversitesi'),
('Kırklareli Üniversitesi'),
('Kilis 7 Aralık Üniversitesi'),
('Kocaeli Üniversitesi'),
('Konya Teknik Üniversitesi'),
('Kütahya Dumlupınar Üniversitesi'),
('Malatya Turgut Özal Üniversitesi'),
('Marmara Üniversitesi'),
('Mehmet Akif Ersoy Üniversitesi'),
('Mersin Üniversitesi'),
('Mimar Sinan Güzel Sanatlar Üniversitesi'),
('Muğla Sıtkı Koçman Üniversitesi'),
('Mustafa Kemal Üniversitesi'),
('Necmettin Erbakan Üniversitesi'),
('Nevşehir Hacı Bektaş Veli Üniversitesi'),
('Niğde Ömer Halisdemir Üniversitesi'),
('Ordu Üniversitesi'),
('Orta Doğu Teknik Üniversitesi'),
('Osmaniye Korkut Ata Üniversitesi'),
('Pamukkale Üniversitesi'),
('Sakarya Üniversitesi'),
('Selçuk Üniversitesi'),
('Siirt Üniversitesi'),
('Sivas Cumhuriyet Üniversitesi'),
('Süleyman Demirel Üniversitesi'),
('Trakya Üniversitesi'),
('Tunceli Üniversitesi'),
('Türk Hava Kurumu Üniversitesi'),
('Uludağ Üniversitesi'),
('Uşak Üniversitesi'),
('Yalova Üniversitesi'),
('Yıldız Teknik Üniversitesi'),
('Yozgat Bozok Üniversitesi'),
('Zonguldak Bülent Ecevit Üniversitesi'),
('İzmir Demokrasi Üniversitesi'),
('İstanbul Medeniyet Üniversitesi'),
('İstanbul Üniversitesi-Cerrahpaşa'),
('İstanbul Sabahattin Zaim Üniversitesi'),
('İstanbul Şehir Üniversitesi'),
('Kadir Has Üniversitesi'),
('Koç Üniversitesi'),
('Sabancı Üniversitesi'),
('Bahçeşehir Üniversitesi'),
('İhsan Doğramacı Bilkent Üniversitesi'),
('Bilgi Üniversitesi'),
('Doğuş Üniversitesi'),
('Fatih Sultan Mehmet Vakıf Üniversitesi'),
('İzmir Ekonomi Üniversitesi'),
('Üsküdar Üniversitesi'),
('Acıbadem Mehmet Ali Aydınlar Üniversitesi'),
('Başkent Üniversitesi');



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

ALTER TABLE yorumlar
ADD COLUMN title VARCHAR(255) NULL AFTER id;

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