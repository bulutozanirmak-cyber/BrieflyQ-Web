# BRIEFLYQ MEDYA MERKEZİ — ANA HAFIZA, KURALLAR VE SİSTEM BELGESİ
> **Son Güncelleme:** 28 Kasım 2026  
> **Konum:** `/Users/refikirmak/BrieflyQ Medya Merkezi/MEMORY.md`  
> **Yayın:** [brieflyq.com](https://brieflyq.com)

Bu belge; projenin başından bu yana alınan kararları, sistem mimarisini, teknik altyapıyı ve **asla esnetilemeyecek kırmızı çizgileri/kuralları** eksiksiz olarak kayıt altında tutar. Ajanlar ve sistem sonraki tüm oturumlarda bu hafıza belgesini rehber alır.

---

## 1. KIRMIZI ÇİZGİLER & MUTLAK KATI KURALLAR

1. **KESİNLİKLE GERÇEK VE TEYİTLİ BİLGİ KURALI (SIFIR HALÜSİNASYON / SIFIR UYDURMA):**
   * **Hiçbir dava numarası, karar metni, şirket adı, hakim ismi, ceza tutarı veya mevzuat maddesi ASLA yapay zeka tarafından uydurulamaz veya prosedürel/sentetik olarak türetilemez.**
   * Sitede yayımlanan her bir analiz doğrudan resmi açık kaynaklara dayanmak ZORUNDADIR:
     - **SEC (Securities and Exchange Commission):** Resmi bültenler (`sec.gov/news/pressreleases.rss`) ve EDGAR bildirimleri.
     - **FTC (Federal Trade Commission) & DOJ Antitrust:** Resmi basın ve icra bültenleri (`ftc.gov/feeds/press-release.xml`).
     - **Delaware Court of Chancery & Federal Mahkemeler:** CourtListener / RECAP / resmi mahkeme arşiv kayıtları.
   * Her haberin sonunda doğrulanabilir, resmi mahkeme/kurum döküm numarası ve arşiv bağlantısı yer alan tablo (`Verifiable Primary Sources & Official Dockets`) bulunmalıdır.

2. **DİL VE EDİTORYAL ÜSLUP KURALI:**
   * Kullanıcı arayüzünde, sitede veya haber metinlerinde kesinlikle yapay zeka jargonu (*"LLM-generated"*, *"machine-scraped"*, *"yapay zekamız özetledi"*, *"BLUF word count"* vb.) yer alamaz.
   * Dil; Wall Street, Chancery Court, Financial Times Lex ve Bloomberg Terminal ciddiyetinde, lüks ve kurumsal olmalıdır.
   * Kullanıcıyla iletişim daima net, açık, dürüst ve Türkçe yürütülür. Sorunlar saklanmaz, açıkça raporlanır.

3. **OTOMASYON VE DAĞITIM KURALI:**
   * Ağır iş yükleri, derlemeler ve üretim süreçleri bulut/CI-CD altyapısı üzerinden yürütülür.
   * Yerel ortamda rastgele paket kurulumları yapılmaz; Next.js derlemeleri Vercel ve GitHub Actions üzerinde çalışır.

---

## 2. BUGÜNE KADARKİ GELİŞMELER VE SÜREÇ ÖZETİ

### 18 - 28 Ekim 2026: Altyapı Kurulumu ve İlk Analizler
* BrieflyQ için Next.js App Router, Tailwind CSS ve TypeScript tabanlı lüks koyu tema mimarisi kuruldu.
* İlk 12 derin döküm analizi (Delaware Chancery Apex, Capital One/Discover, Paramount/Skydance, FTC HSR revizyonu vb.) hazırlandı.
* Google Search Console doğrulaması için `google6a3339ac748273ef.html` ve meta etiketleri yerleştirildi.
* Vercel Web Analytics ve Speed Insights entegre edildi.

### 28 Ekim - 18 Kasım 2026: Dağıtım Onarımı ve Otonom Hat
* GitHub Actions zamanlayıcısının (`daily-pipeline.yml`) çalıştığı ancak sadece tarih güncellediği tespit edildi.
* Next.js 16 / Turbopack kaynaklı font derleme hataları, `package.json` içerisinde kararlı Webpack motoruna çekilerek kökten düzeltildi.
* 18 Kasım 2026 tarihli yeni Delaware Chancery uptier davası (`delaware-chancery-uptier-restructuring-dgcl.md`) Pillow ile üretilen 1376x768 özel kapak görseliyle manşete alındı.

### 18 Kasım 2026: SEO, Google ve AdSense Hazırlığı
* **Canonical URL & 308 Yönlendirmeleri:** `www.brieflyq.com` ve `brieflyq-web.vercel.app` kalıcı HTTP 308 ile `https://brieflyq.com`'a kilitlendi. Ana sayfaya `<link rel="canonical" href="https://brieflyq.com"/>` eklendi.
* **Yasal Sayfalar:** Google AdSense onayı için zorunlu olan `/about` (Künye & Masthead) ve `/terms` (Kullanım Koşulları) sayfaları sıfırdan yazılıp alt menüye ve sitemap'e bağlandı.
* **İnteraktif Filtre & Arama:** Ana sayfaya kategori çipleri (*Delaware Chancery*, *SEC*, *FTC/Antitrust*, *Private Credit*) ve anlık arama motoru (`DossierArchiveClient`) eklendi.
* **Hukuki Atıf ve Paylaşım Çubuğu:** Makalelerin içine X, LinkedIn paylaşımı, Bluebook mahkeme atfını kopyalama ve yazdırma butonları eklendi.
* **AdSense Yuvaları:** Tasarımı bozmayan kurumsal reklam/sponsorluk yuvaları (`AdSlot`) yerleştirildi.
* **Web Tasarım Yükseltmesi:** Sayfa; Bloomberg Terminal ve Financial Times kalibresinde çok katmanlı obsidiyen zemin, telemetri şeritleri, BQ heraldik monogramı ve ışıltılı arbitraj matrisiyle üst klasmana taşındı.

### 19 - 28 Kasım 2026: Güncel Durum
* Sitedeki toplam analiz sayısı **16'ya**, toplam indekslenebilir URL sayısı **22'ye** yükseldi.
* GitHub Actions her sabah 06:00 UTC'de tetiklenmekte ve Vercel'e sıfır hata ile dağıtım yapmaktadır.

---

## 3. MEVCUT TEKNİK ALTYAPI VE DOSYA HARİTASI

* **Canlı Domain:** `https://brieflyq.com` (ve `www.brieflyq.com` -> 308)
* **Vercel Proje ID:** `prj_NmNoicTMVGzuAcv1X2XARv3jzAOw` (Team: `team_3e0hSNV68oiftpT0zBPG9MsC`)
* **GitHub Deposu:** `bulutozanirmak-cyber/BrieflyQ-Web.git` (Branch: `main`)
* **Haber Makaleleri:** `_posts/*.md` (YAML frontmatter + BLUF + 3 analiz bölümü + resmi döküm tablosu)
* **Kapak Görselleri:** `public/assets/blog/<slug>/cover.jpg` (16:9, 1376x768, Pillow ile üretilmiş koyu lüks kurumsal grafikler)
* **Otomasyon Scripti:** `scripts/autonomous_intelligence_pipeline.py` (3-Ajanlı Hat: Ajan 1 İçerik, Ajan 2 GEO/BLUF Denetimi, Ajan 3 Git & Vercel Dağıtımı)
* **Zamanlanmış İş:** `.github/workflows/daily-pipeline.yml` (Her gün 06:00 UTC / TSİ 09:00)
* **SEO Dosyaları:**
  - Site Haritası: `src/app/sitemap.ts` (`/sitemap.xml`)
  - Robots: `src/app/robots.ts` (`/robots.txt`)
  - Google Doğrulama: `public/google6a3339ac748273ef.html`

---

## 4. İÇERİK STANDARD VE FORMATI (BLUF & GEO UYUMU)

Her yeni haber dosyasında aşağıdaki şablon birebir korunmalıdır:
1. **Frontmatter:** `title`, `excerpt`, `coverImage`, `date`, `author` (isim ve resim), `ogImage`.
2. **BLUF (Executive Briefing Memorandum):** 30 ile 60 kelime arasında, net, doğrulanmış kurumsal özet.
3. **Analiz Gövdesi:** 
   - 01. Yargısal/Düzenleyici Emsal & Hukuki Çerçeve
   - 02. İşlem Mimarisi ve İcra Detayları
   - 03. Wall Street ve Özel Sermaye Piyasa Etkileri
4. **Resmi Döküm Tablosu:** Mahkeme/kurum, hakim/yetkili, resmi dosya/döküm numarası, yasal dayanak, resmi arşiv bağlantısı.

---

## 5. GELECEK ADIMLAR VE ÇALIŞMA PLANI

1. **Canlı Resmi Besleme Entegrasyonu:** Botun SEC (`sec.gov/news/pressreleases.rss`) ve FTC (`ftc.gov/feeds/press-release.xml`) resmi bültenlerini günlük tarayarak sadece teyitli gerçek dökümleri işlemesi.
2. **Google AdSense Başvurusu:** 16 derin analiz ve tüm yasal sayfalar hazır olduğundan kullanıcının AdSense onayına göndermesi.
3. **Sosyal Medya Dağıtımı:** Günlük çıkan gerçek döküm özetlerinin X/LinkedIn üzerinde paylaşılarak ilk organik hedef kitleye ulaştırılması.
