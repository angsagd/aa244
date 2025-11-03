# MODUL PRAKTIKUM PERTEMUAN 1

## PENGENALAN WEB DAN STRUKTUR DASAR HTML

---

### 1. Tujuan Pembelajaran

Setelah menyelesaikan praktikum ini, mahasiswa diharapkan mampu:

1. Menyiapkan lingkungan pengembangan web di laptop masing-masing.
2. Membuat struktur dasar dokumen HTML5 yang valid.
3. Memahami konsep dan struktur elemen dalam dokumen HTML.
4. Menggunakan elemen-elemen HTML standar untuk menyusun konten halaman.
5. Menjalankan dan memeriksa hasil kerja melalui Live Server atau pembukaan manual di browser.
6. Memahami struktur hierarki elemen HTML sebagai dasar penerapan CSS selector dan JavaScript DOM traversing.

---

### 2. Dasar Teori Singkat

#### 2.1 Pengantar HTML

HTML (*HyperText Markup Language*) merupakan bahasa markup yang digunakan untuk membangun **struktur logis halaman web**.
HTML tidak bersifat pemrograman, melainkan sistem penandaan (*markup system*) yang memberi makna semantik terhadap konten.
Browser bertugas membaca markup tersebut dan menampilkan hasilnya secara visual.

Contoh sederhana:

```html
<p>Ini adalah sebuah paragraf.</p>
```

Teks di dalam tanda `<p>` dan `</p>` akan ditampilkan sebagai paragraf di halaman web.

---

#### 2.2 Struktur Elemen HTML

Setiap elemen HTML memiliki struktur dasar sebagai berikut:

```
<tag-pembuka atribut="nilai">isi atau konten</tag-penutup>
```

Contoh elemen lengkap:

```html
<a href="https://stikom-bali.ac.id">Kunjungi ITB STIKOM Bali</a>
```

**Keterangan struktur elemen:**

1. **Tag pembuka (`<a>`):** menunjukkan awal dari elemen.
2. **Atribut (`href="..."`):** memberikan informasi tambahan yang menjelaskan perilaku atau karakteristik elemen.
3. **Isi atau konten:** teks atau elemen lain yang berada di dalam elemen tersebut.
4. **Tag penutup (`</a>`):** menandai akhir dari elemen.

Beberapa elemen bersifat **void element** (tidak memiliki isi dan tag penutup), seperti:

```html
<img src="foto.jpg" alt="Gambar Profil">
<br>
<hr>
<input type="text">
```

---

#### 2.3 Atribut dan Nilainya

Atribut ditulis di dalam tag pembuka dan berfungsi untuk memberikan *property* atau perilaku tertentu pada elemen.
Format penulisan atribut:

```
nama_atribut="nilai"
```

Contoh:

```html
<img src="logo.png" alt="Logo Kampus" width="200">
```

Penjelasan:

* `src` → menentukan lokasi file gambar.
* `alt` → teks alternatif jika gambar tidak dapat dimuat.
* `width` → menentukan lebar tampilan gambar.

Sebuah elemen dapat memiliki lebih dari satu atribut.

---

#### 2.4 Hirarki dan Relasi Antar Elemen (Document Structure)

HTML memiliki struktur **hierarkis** di mana setiap elemen dapat berada di dalam elemen lain.
Struktur ini disebut **Document Object Model (DOM)** atau **Document Tree**.

Contoh sederhana:

```html
<html>
  <head>
    <title>Contoh Struktur</title>
  </head>
  <body>
    <h1>Judul Utama</h1>
    <p>Ini adalah paragraf pertama.</p>
  </body>
</html>
```

Hubungan antar elemen:

* `<html>` adalah **elemen akar (root element)**.
* `<head>` dan `<body>` adalah **child element** dari `<html>`.
* `<title>` adalah **child** dari `<head>`.
* `<h1>` dan `<p>` adalah **child** dari `<body>`.
* Elemen di dalam `<body>` bersifat **sibling** (setara satu tingkat).

Struktur hierarki ini penting untuk:

* **CSS:** menentukan target elemen menggunakan *selector* (misalnya `body p` hanya memengaruhi elemen `<p>` di dalam `<body>`).
* **JavaScript:** menelusuri (traversing) elemen DOM untuk mengubah konten atau atribut secara dinamis.

Visualisasi pohon dokumen:

```
html
├── head
│   └── title
└── body
    ├── h1
    └── p
```

---

#### 2.5 Struktur Dasar Dokumen HTML5

Dokumen HTML selalu dimulai dengan deklarasi tipe dokumen (`<!DOCTYPE html>`) yang menunjukkan bahwa file mengikuti standar HTML5.

Struktur lengkap:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Judul Halaman</title>
</head>
<body>
  <h1>Halo Dunia!</h1>
  <p>Ini adalah halaman HTML pertama saya.</p>
</body>
</html>
```

---

### 3. Langkah Praktikum Terperinci

#### A. Persiapan Lingkungan Pengembangan

1. Instal **Visual Studio Code (VS Code)** dan browser modern (Chrome, Edge, atau Firefox).
2. Buka VS Code → buat folder baru bernama:

   ```
   aa244/
   ```
3. Buat struktur awal proyek:

   ```
   aa244/
   ├── index.html
   ├── assets/
   │   ├── images/
   │   ├── audio/
   │   └── video/
   ```
4. Buka folder `aa244` di VS Code.
5. Instal ekstensi **Live Server** pada VS Code.
6. Klik kanan pada `index.html` → pilih **Open with Live Server**.

---

#### B. Membuat Struktur Dasar HTML

1. Buka `index.html`.
2. Ketik tanda `!` dan tekan **Tab** untuk menghasilkan template HTML5 otomatis.
3. Ubah:

   ```html
   <title>Praktikum HTML – Pertemuan 1</title>
   ```
4. Tambahkan di dalam `<body>`:

   ```html
   <h1>Halo Dunia!</h1>
   <p>Ini adalah halaman HTML pertama saya.</p>
   ```
5. Simpan dan jalankan melalui Live Server.

**Checkpoint 1:** Pastikan teks “Halo Dunia!” tampil di browser.

---

#### C. Elemen Standar HTML

1. **Heading**
   Digunakan untuk membuat judul atau subjudul.

   ```html
   <h1>Judul Utama</h1>
   <h2>Subjudul Pertama</h2>
   <h3>Subjudul Kedua</h3>
   ```

2. **Paragraf dan Format Teks**
   Menambahkan teks dan gaya sederhana.

   ```html
   <p>Ini adalah <strong>teks tebal</strong>, <em>teks miring</em>, dan <u>teks bergaris bawah</u>.</p>
   <p>Gunakan <mark>tag mark</mark> untuk menyorot teks penting.</p>
   ```

3. **Komentar**
   Komentar tidak akan ditampilkan di browser.

   ```html
   <!-- Komentar hanya terlihat di kode, bukan di tampilan web -->
   ```

4. **Daftar (List)**

   * *Unordered list* (dengan bullet):

     ```html
     <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li>JavaScript</li>
     </ul>
     ```
   * *Ordered list* (dengan nomor):

     ```html
     <ol>
       <li>Langkah Pertama</li>
       <li>Langkah Kedua</li>
     </ol>
     ```

5. **Tabel**
   Untuk menyusun data tabular.

   ```html
   <table border="1" cellpadding="5" cellspacing="0">
     <caption>Daftar Nilai Mahasiswa</caption>
     <tr>
       <th>Nama</th>
       <th>Nilai</th>
     </tr>
     <tr>
       <td>Andi</td>
       <td>85</td>
     </tr>
   </table>
   ```

6. **Tautan (Hyperlink)**

   ```html
   <p>Kunjungi <a href="https://developer.mozilla.org/">MDN Web Docs</a> untuk referensi.</p>
   ```

---

#### D. Menambahkan Media

1. **Gambar**
   Simpan gambar ke folder `assets/images/`.

   ```html
   <img src="assets/images/profil.jpg" alt="Foto Profil" width="200">
   ```

2. **Audio**
   Simpan file MP3 ke `assets/audio/`.

   ```html
   <audio controls>
     <source src="assets/audio/musik.mp3" type="audio/mpeg">
     Browser Anda tidak mendukung elemen audio.
   </audio>
   ```

3. **Video**
   Simpan file MP4 ke `assets/video/`.

   ```html
   <video width="400" controls>
     <source src="assets/video/demo.mp4" type="video/mp4">
     Browser Anda tidak mendukung elemen video.
   </video>
   ```

---

#### E. Menambahkan Node Menggunakan Emmet Abbreviation (VS Code)

1. Ketik perintah:

   ```
   ul>li{Item $}*5
   ```

   kemudian tekan **Tab**.
2. Hasil otomatis:

   ```html
   <ul>
     <li>Item 1</li>
     <li>Item 2</li>
     <li>Item 3</li>
     <li>Item 4</li>
     <li>Item 5</li>
   </ul>
   ```

---

#### F. Menjalankan dan Menampilkan Hasil

1. **Menggunakan Live Server**

   * Klik kanan pada file `index.html` → pilih *Open with Live Server*.
   * Browser akan menampilkan halaman.
   * Simpan perubahan (Ctrl + S) untuk memperbarui hasil secara otomatis.

2. **Tanpa Live Server (Manual)**

   * Klik dua kali file `index.html`.
   * Browser akan membukanya langsung.
   * Tekan **F5** atau **Ctrl + R** untuk menyegarkan hasil setelah melakukan perubahan.

---

### 4. Checkpoint Akhir

| Aspek           | Kriteria                                       | Status |
| --------------- | ---------------------------------------------- | ------ |
| Struktur HTML   | Menggunakan `<!DOCTYPE>` dan tag utama lengkap | ☐      |
| Elemen Teks     | Heading, paragraf, daftar, tabel               | ☐      |
| Media           | Minimal satu gambar dan satu audio/video       | ☐      |
| Tautan          | Berfungsi dengan benar                         | ☐      |
| Struktur Folder | Folder `assets` digunakan sesuai fungsinya     | ☐      |
| Tampilan        | Dapat diakses di browser tanpa error           | ☐      |

---

### 5. Refleksi dan Diskusi

1. Mengapa HTML dikategorikan sebagai *markup language* dan bukan *programming language*?
2. Apa peran atribut dalam elemen HTML?
3. Bagaimana browser memahami bahwa file tertentu adalah HTML?
4. Mengapa penting memahami hubungan antar elemen dalam konteks DOM?
