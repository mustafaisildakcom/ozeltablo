# Özel Tablo Web Sitesi

Özel Tablo markasının yapay zekâ destekli, kişiselleştirilebilir tablo deneyimini tanıtan tek sayfalık web sitesidir. Proje statik HTML, CSS ve JavaScript kullanılarak hazırlandı ve GitHub Pages üzerinde yayınlanmaya hazırdır.

## İçerik

- Hero bölümü ile öne çıkan koleksiyon tanıtımı
- Koleksiyon, süreç ve müşteri hikâyelerini anlatan bölümler
- Yapay zekâ destekli tasarım süreci vurguları
- İletişim formu ve şirket bilgileri
- Mobil navigasyon ve kaydırma animasyonları

## Proje Yapısı

```
.
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── README.md
```

## Geliştirme

Projeyi yerelde görüntülemek için herhangi bir statik sunucu yeterlidir. Örneğin Python ile hızlıca başlatabilirsiniz:

```bash
python -m http.server 8000
```

Ardından tarayıcınızdan `http://localhost:8000` adresini ziyaret edin.

## GitHub Pages'e Yayınlama

1. Projeyi GitHub deposuna gönderin ve ana şubenizin `main` olduğundan emin olun.
2. GitHub üzerinde depo sayfasından **Settings → Pages** sekmesine gidin.
3. **Build and deployment** bölümünde `Deploy from a branch` seçeneğini işaretleyin.
4. Kaynak şube olarak `main` ve klasör olarak `/ (root)` seçin.
5. **Save** butonuna bastıktan sonra birkaç dakika içinde site `https://<kullanici-adi>.github.io/ozeltablo/` adresinde aktif olacaktır.

## Lisans

Tüm hakları Özel Tablo'ya aittir.
