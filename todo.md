# 📌 Bioly Projesi – Fullstack ToDo List

## 📁 1. Proje Yapısı Kurulumu
- [x] `bioly` ana klasörünü oluştur
- [x] `client` ve `server` klasörlerini oluştur
- [ ] Git repo başlat, `.gitignore` ayarla

---

## ⚙️ 2. Backend Setup (Node.js + Express)
- [x] `npm init -y`
- [x] Gerekli paketleri yükle: `express`, `cors`, `dotenv`, `postgresql`, `bcrypt`, `jsonwebtoken`
- [x] `index.js` dosyasını oluştur
- [x] `.env` yapılandırması

---

## 🔐 3. Backend: Authentication Sistemi
- [x] postgreSql bağlantısı kur
- [x] `User` modeli oluştur
- [x] Register ve Login route'larını oluştur
- [x] JWT token üretimi ve middleware
- [x] Postman ile test et

---

## 🔗 4. Backend: Link Sistemi
- [x] `Link` modeli oluştur (title, url, userId)
- [x] CRUD işlemleri: ekle, listele, sil, güncelle
- [x] Auth middleware ile kullanıcıya özel erişim
- [x] Public profil route'u: `GET /:username`
- [x] Link Güncelleme
- [] Link Count güncelleme ve istatistik tutma
---

## 🎨 5. Frontend Setup (React + Tailwind)
- [x] `npx create-react-app`
- [x] Tailwind kurulumu 
- [x] React Router kurulumu
- [x] Sayfa yapısını oluştur: Login, Register, Dashboard, Public Profile

---

## 🔑 6. Frontend: Auth Sayfaları
- [x] Login ve Register formları
- [x] Axios ile API bağlantısı  // düzenlenicek ileride moduler yapı olucak ve tüm api bağlantıları bir dosyada toparlanıcak
- [x] Token'ı localStorage'a kaydet
- [x] Giriş sonrası yönlendirme
- [x] Token fonksiyonlara ulaşmıyor bunu çöz ---- AACCCiiiİİİllll

---

## 🧭 7. Frontend: Dashboard (Link Yönetimi)
- [x] Kullanıcı linklerini göster
- [x] Yeni link ekleme, silme, güncelleme
- [x] Çıkış (Logout) işlemi
- [x] Protected route yapılandırması
- [x] Mobil uyumlu dashboard
- [x] Dashboard Ana sayfasında istatistikleri gösterme 
---

## 🌐 8. Frontend: Public Profil Sayfası
- [x] `/:username` üzerinden veri çekme
- [x] Linklerin sade mobil-first gösterimi
- [x] (Opsiyonel) Profil fotoğrafı, bio, ikonlar

---

## 🚀 9. Deployment
- [ ] MongoDB Atlas (veya Supabase)
- [ ] Backend deploy (Render / Railway)
- [ ] Frontend deploy (Vercel)
- [ ] `.env` ayarlarını canlıya göre güncelle

---

## 🎁 10. Bonus Özellikler
- [ ] Dark mode
- [x] Tıklanma sayacı
- [ ] QR kod üretme
- [ ] Tema seçimi
- [ ] SEO iyileştirmeleri
