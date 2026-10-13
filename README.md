# BrieflyQ-Web

**BrieflyQ Medya ve Haber Merkezi** için resmi Next.js (App Router), TypeScript, Tailwind CSS ve Markdown tabanlı, arama motorları (SEO) için tam optimize edilmiş ve son derece hızlı web platformu şablonu.

---

## 🚀 Özellikler

- **Next.js 15 & React 19:** En güncel Next.js App Router mimarisi ve Turbopack desteği.
- **Yüksek Hız & Statik Üretim (SSG):** Tüm blog ve haber içerikleri derleme anında statik olarak üretilir (sıfır veritabanı gecikmesi, 100/100 Core Web Vitals skoru).
- **Gelişmiş SEO Desteği:**
  - Otomatik dinamik XML Sitemap (`/sitemap.xml`)
  - Arama motoru bot yönlendirmesi (`/robots.txt`)
  - Google News uyumlu JSON-LD `NewsArticle` yapısal veri (rich snippets)
  - OpenGraph ve Twitter Card meta etiketleri
  - RSS Beslemesi (`/feed.xml`)
- **Tailwind CSS & Karanlık Mod:** Modern, mobil uyumlu ve şık tasarım, dahili tema değiştirici.
- **Markdown / MDX İçerik Yönetimi:** `_posts` klasörüne eklenen her `.md` dosyası otomatik olarak yeni bir yazı/haber olarak yayınlanır.

---

## 🛠️ Kurulum & Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install
# veya
pnpm install
# veya
yarn install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

---

## 📁 Dizin Yapısı

```
├── _posts/                 # Markdown haber ve blog içerikleri
├── public/                 # Statik varlıklar (favicons, görseller)
├── src/
│   ├── app/                # Next.js App Router sayfaları
│   │   ├── _components/    # UI bileşenleri
│   │   ├── feed.xml/       # RSS Feed route
│   │   ├── posts/[slug]/   # Dinamik yazı sayfası + JSON-LD
│   │   ├── layout.tsx      # Kök düzen ve global SEO meta tagları
│   │   ├── page.tsx        # Ana sayfa
│   │   ├── robots.ts       # Dinamik robots.txt
│   │   └── sitemap.ts      # Dinamik sitemap.xml
│   ├── interfaces/         # TypeScript tip tanımları
│   └── lib/                # API ve yardımcı fonksiyonlar
├── tailwind.config.ts      # Tailwind CSS yapılandırması
└── package.json
```

---

## 🌐 Dağıtım (Deployment)

Projeyi tek tıkla [Vercel](https://vercel.com) veya dilediğiniz Node.js/Edge barındırma servisine dağıtabilirsiniz.
