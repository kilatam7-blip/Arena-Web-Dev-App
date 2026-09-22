# Cinematic Travel Agency Homepage

Landing page agensi perjalanan bertema sinematik untuk destinasi Jepang, dengan fokus utama pada Tokyo dan pengalaman visual yang imersif.

## Fitur

- Hero section bertema Tokyo dengan latar gerbang torii pada malam hari.
- Animasi pembuka, slow pan pada gambar hero, dan efek pulse pada tombol video.
- Section **Popular Tours** dengan empat kartu destinasi:
  - Kyoto Temples and Morning Mist
  - Pagodas Beneath the Mountains
  - Cherry Blossom Season
  - Kimono Walk with Red Umbrella
- Section **Travel and Inspire Your Life** dengan dua thumbnail video/reel.
- Layout responsif untuk desktop, tablet, dan mobile.
- Dukungan `prefers-reduced-motion` untuk mengurangi animasi bagi pengguna yang memintanya.
- Asset gambar lokal sehingga halaman dapat berjalan tanpa layanan gambar eksternal.

## Teknologi

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `vite-plugin-singlefile`
- `clsx` dan `tailwind-merge`

## Menjalankan Secara Lokal

### Prasyarat

- Node.js versi 18 atau lebih baru
- npm

### Instalasi

```bash
npm install
```

### Development server

```bash
npm run dev
```

Setelah server berjalan, buka URL yang ditampilkan Vite, biasanya:

```text
http://localhost:5173
```

### Build production

```bash
npm run build
```

Hasil build akan dibuat di folder `dist/`.

### Preview build production

```bash
npm run preview
```

## Perintah NPM

| Perintah | Keterangan |
| --- | --- |
| `npm run dev` | Menjalankan development server Vite. |
| `npm run build` | Membuat build production. |
| `npm run preview` | Menjalankan preview dari hasil build production. |

## Struktur Proyek

```text
.
├── public/
│   └── images/          # Gambar hero, tur, dan thumbnail reel
├── src/
│   ├── utils/
│   │   └── cn.ts        # Utilitas penggabungan class Tailwind
│   ├── App.tsx          # Konten dan layout utama halaman
│   ├── index.css        # Style global dan animasi
│   └── main.tsx         # Entry point React
├── index.html           # HTML shell aplikasi
├── package.json         # Dependensi dan script proyek
├── tsconfig.json        # Konfigurasi TypeScript
└── vite.config.ts       # Konfigurasi Vite, Tailwind, dan single-file build
```

## Asset Gambar

Semua gambar halaman disimpan di `public/images/`:

- `hero-torii-night.png` - gambar hero utama.
- `tour-1-temple.png` sampai `tour-4-umbrella.png` - gambar kartu tur.
- `aurora-mountains-night.png` - latar section video.
- `thumb-road-sunset.png` dan `thumb-snow-village.png` - thumbnail reel.

## Catatan Pengembangan

- Data konten tur, cerita, dan reel saat ini didefinisikan langsung di `src/App.tsx`.
- Link navigasi dan tombol video masih berupa elemen UI presentasi dan belum terhubung ke halaman atau media sungguhan.
- Judul dokumen HTML dapat diubah di `index.html` jika ingin menggunakan nama brand final.
- Alias import `@` diarahkan ke folder `src` melalui `vite.config.ts` dan `tsconfig.json`.

## Lisensi

Belum ditentukan. Tambahkan lisensi proyek sebelum digunakan untuk distribusi publik atau komersial.
