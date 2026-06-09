# Sistem Pakar Diagnosis Kebutuhan Konseling Siswa

Aplikasi Sistem Pakar berbasis *Rule-Based System* yang dirancang untuk membantu Guru Bimbingan Konseling (BK) dalam mendiagnosis kebutuhan penanganan siswa secara cepat dan objektif. Sistem ini menggunakan metode inferensi **Forward Chaining** dengan 15 aturan IF-THEN untuk menghasilkan 5 keputusan diagnosis akhir secara akurat.

Proyek ini dibangun sebagai pemenuhan Tugas Akhir Semester (UAS) mata kuliah Sistem Pakar.

## 🚀 Fitur Utama

* **Mesin Inferensi Otomatis:** Memproses input gejala perilaku siswa untuk menentukan prioritas intervensi konseling yang paling mendesak.
* **Validasi Input Ketat:** Memastikan integritas data, seperti form NISN yang diwajibkan dalam format angka murni.
* **Knowledge Base Terstruktur:** Memiliki 20 daftar gejala yang dipetakan ke dalam 15 aturan spesifik (Akademik, Kedisiplinan, Sosial, Psikologis, dan Apresiasi).
* **Laporan Diagnosis Rinci:** Menampilkan kesimpulan, aturan (Rule) yang tereksekusi oleh sistem, serta saran/solusi penanganan langsung.
* **Antarmuka Modern:** Desain antarmuka pengguna yang bersih dan responsif.

## 🧠 Cara Kerja Mesin Inferensi

Sistem ini digerakkan oleh **Inference Engine** (Mesin Inferensi) menggunakan metode **Forward Chaining** (Runut Maju) dengan pendekatan **Hierarki Prioritas (Top-Down)**. Alur kerjanya adalah sebagai berikut:

1. **Input Fakta:** Pengguna (Guru BK) memberikan fakta awal dengan mencentang berbagai gejala observasi yang terlihat pada siswa.
2. **Evaluasi Kombinasi (Operator AND):** Mesin mengevaluasi kumpulan gejala tersebut untuk mencari kecocokan multi-kondisi. Sebuah diagnosis hanya akan dijatuhkan jika *semua* syarat gejala dalam satu aturan IF-THEN terpenuhi.
3. **Prioritas Penanganan (Top-Down):** Kode aturan disusun berurutan berdasarkan tingkat urgensi. Jika mesin menemukan kecocokan pada aturan tingkat atas (misalnya masalah akademik atau kedisiplinan), mesin akan langsung memberikan hasil dan menghentikan evaluasi untuk aturan di bawahnya. Hal ini meniru logika kepakaran dunia nyata di mana masalah paling mendesak harus ditangani terlebih dahulu.
4. **Default Fallback (Sapu Jagat):** Jika gejala yang dipilih tidak memicu indikasi masalah/pelanggaran dari ke-15 aturan yang ada, mesin akan secara otomatis mengeluarkan diagnosis _default_, yaitu "Apresiasi & Motivasi Lanjutan".

## 🛠️ Teknologi yang Digunakan

* **Framework:** [Nuxt 3](https://nuxt.com/) (Vue.js 3 Composition API)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Logika Sistem:** JavaScript / TypeScript (Composables)

## 👨‍💻 Pengembang

* **Nama:** Salman Azhar Latisio
* **NIM:** 23552011046
* **Kelas:** TIF RP 22 A
