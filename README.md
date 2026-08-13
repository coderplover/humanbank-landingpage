# ⚡ Humanbank - Interactive Landing Page Showcase

Bu repository, local-first güvenli veri arşivleme uygulaması olan **Humanbank** için hazırlanmış, yüksek etkileşimli ve premium tasarımlı tanıtım web sitesidir (Landing Page). 

Proje; masaüstü uygulamasının CLI arayüzünü, Flask tabanlı Web Kontrol panelini ve dosya şifreleme mekanizmalarını birebir simüle eden React bileşenleri içerir.

---

## 🚀 Proje Özellikleri (Simülatörler)

Web sitesi, uygulamanın teknik yeteneklerini ziyaretçilere doğrudan tarayıcı üzerinden deneyimletmek amacıyla şu interaktif bileşenleri sunar:

1. **PowerShell CLI Simülatörü (`interactive-terminal.tsx`):**
   - Kullanıcı girişi ve şifre doğrulama adımları (Demo için şifre: `volper`).
   - Kayıt listeleme ve hedeflerin özet tablosu.
   - Soyağacı ve hedef detay kartları (Kullanıcı verileri tamamen rastgele test kayıtlarından oluşmaktadır).

2. **Web Command Dashboard Pre-view (`interactive-dashboard.tsx`):**
   - Kayıtların aranabildiği siber takip grid alanı.
   - Detaylı profil dosyası incelemesi, coğrafi radar simülasyonu ve anne-baba soyağacı ilişki grafiği (SVG Node Network).

3. **Hex & Kriptoloji Analizör Laboratuvarı (`security-hex.tsx`):**
   - Metin verilerinin şifreli JSON olarak diske yazılmasını veya görsellerin ayrı ayrı şifreli `.bin` dosyalarına dönüştürülme süreçlerini simüle eden etkileşimli panel.

---

## �️ Kullanılan Teknolojiler

- **Framework:** Next.js 15 (App Router)
- **Programming Language:** TypeScript
- **Styling:** Tailwind CSS (Cyberpunk & Dark-mode temalı)
- **Animations:** Framer Motion (Mikro-etkileşimler ve geçişler)
- **Icons:** Lucide React

---

## 💻 Yerelde Çalıştırma ve Dağıtım

### Kurulum

İlk olarak bağımlılıkları yükleyin:
```bash
npm install
```

Geliştirme sunucusunu başlatın:
```bash
npm run dev
```
Ardından [http://localhost:3000](http://localhost:3000) adresinden siteyi görüntüleyebilirsiniz.

### Production Build

Static HTML export yapmak veya production paketini hazırlamak için:
```bash
npm run build
```

### 🌐 Canlıya Alma (Deployment)

Bu siteyi kolayca canlıya almak için aşağıdaki cloud sağlayıcılarını kullanabilirsiniz:
- **Vercel:** Next.js projeleri için en hızlı entegrasyona sahip platformdur. Github repository'nizi bağlayarak otomatik deploy alabilirsiniz.
- **Netlify:** Build ayarlarını değiştirerek saniyeler içinde yayına alabilirsiniz.
- **GitHub Pages:** `out/` dizinini hedefleyen static export ayarlarını aktif edip GitHub Actions aracılığıyla host edebilirsiniz.
