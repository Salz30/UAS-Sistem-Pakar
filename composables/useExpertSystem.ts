export const useExpertSystem = () => {
  // 1. STATE: Menyimpan data sementara selama aplikasi berjalan
  const studentData = useState('studentData', () => ({
    nama: '',
    nisn: '',
    gejalaTerpilih: [] as string[],
    hasilDiagnosa: null as any
  }))

  // 2. BASIS PENGETAHUAN: Daftar Gejala yang akan ditampilkan di Checkbox
  const daftarGejala = [
    { id: 'G01', nama: 'Nilai ujian turun drastis' },
    { id: 'G02', nama: 'Sering tertidur di kelas' },
    { id: 'G03', nama: 'Tugas sering tidak terkumpul' },
    { id: 'G04', nama: 'Pasif saat diskusi kelas' },
    { id: 'G05', nama: 'Nilai di bawah KKM dan sulit paham instruksi' },
    { id: 'G06', nama: 'Sering alpa/bolos tanpa keterangan' },
    { id: 'G07', nama: 'Sering terlambat datang ke sekolah' },
    { id: 'G08', nama: 'Pakaian seragam sering tidak rapi' },
    { id: 'G09', nama: 'Sering berkeliaran di luar kelas saat jam pelajaran' },
    { id: 'G10', nama: 'Melanggar aturan berat (merokok/berkelahi)' },
    { id: 'G11', nama: 'Sering menyendiri saat istirahat' },
    { id: 'G12', nama: 'Menghindari kontak mata dengan teman' },
    { id: 'G13', nama: 'Ada laporan menjadi korban ejekan (bullying)' },
    { id: 'G14', nama: 'Takut bergabung dengan kelompok' },
    { id: 'G15', nama: 'Mudah marah atau meledak-ledak' },
    { id: 'G16', nama: 'Sering melawan teguran guru' },
    { id: 'G17', nama: 'Sering menangis tanpa sebab / terlihat murung' },
    { id: 'G18', nama: 'Kehadiran 100% dan nilai stabil' },
    { id: 'G19', nama: 'Aktif berorganisasi / ekstrakurikuler' },
    { id: 'G20', nama: 'Mampu bersosialisasi dan memimpin kelompok' }
  ]

  // 3. MESIN INFERENSI: Fungsi Forward Chaining untuk mengevaluasi aturan
  const prosesDiagnosa = (gejalaInput: string[]) => {
    // Default Diagnosis (Jika tidak ada aturan berat yang terpenuhi)
    let kesimpulan = 'Apresiasi & Motivasi Lanjutan'
    let aturanDipakai = 'IF Tidak ada catatan pelanggaran berat THEN Apresiasi & Motivasi'
    let saran = 'Berikan pujian lisan dan berikan tanggung jawab kecil (seperti ketua kelompok) untuk menjaga motivasi positif.'

    // Evaluasi 15 Aturan IF-THEN
    // --- DIAGNOSIS 1: Konseling Akademik & Belajar ---
    if (gejalaInput.includes('G01') && gejalaInput.includes('G02')) {
      kesimpulan = 'Konseling Akademik & Belajar'
      aturanDipakai = 'IF Nilai ujian turun drastis AND Sering tertidur di kelas THEN Konseling Akademik'
      saran = 'Atur jadwal bimbingan belajar tambahan di luar jam kelas dan evaluasi jam tidur siswa.'
    } else if (gejalaInput.includes('G03') && gejalaInput.includes('G04')) {
      kesimpulan = 'Konseling Akademik & Belajar'
      aturanDipakai = 'IF Tugas sering tidak terkumpul AND Pasif saat diskusi kelas THEN Konseling Akademik'
      saran = 'Lakukan pendekatan personal untuk mengetahui kendala pengerjaan tugas dan bantu buatkan jadwal harian.'
    } else if (gejalaInput.includes('G05')) {
      kesimpulan = 'Konseling Akademik & Belajar'
      aturanDipakai = 'IF Nilai di bawah KKM dan sulit paham instruksi THEN Konseling Akademik'
      saran = 'Diskusikan dengan wali kelas untuk memberikan pendampingan ekstra saat materi sulit.'
    }
    
    // --- DIAGNOSIS 2: Konseling Kedisiplinan ---
    else if (gejalaInput.includes('G06') && gejalaInput.includes('G07')) {
      kesimpulan = 'Konseling Kedisiplinan'
      aturanDipakai = 'IF Sering alpa/bolos AND Sering terlambat datang THEN Konseling Kedisiplinan'
      saran = 'Berikan teguran tertulis pertama dan jadwalkan pemanggilan orang tua.'
    } else if (gejalaInput.includes('G08') && gejalaInput.includes('G09')) {
      kesimpulan = 'Konseling Kedisiplinan'
      aturanDipakai = 'IF Pakaian seragam tidak rapi AND Sering berkeliaran di luar kelas THEN Konseling Kedisiplinan'
      saran = 'Teguran lisan secara tegas dan berikan sanksi edukatif jika diulangi.'
    } else if (gejalaInput.includes('G06') && gejalaInput.includes('G10')) {
      kesimpulan = 'Konseling Kedisiplinan'
      aturanDipakai = 'IF Sering alpa/bolos AND Melanggar aturan berat THEN Konseling Kedisiplinan'
      saran = 'Koordinasi dengan Kepala Sekolah untuk tindakan disiplin tegas / skorsing sesuai buku tata tertib.'
    }

    // --- DIAGNOSIS 3: Konseling Sosial & Pergaulan ---
    else if (gejalaInput.includes('G11') && gejalaInput.includes('G12')) {
      kesimpulan = 'Konseling Sosial & Pergaulan'
      aturanDipakai = 'IF Sering menyendiri AND Menghindari kontak mata THEN Konseling Sosial'
      saran = 'Libatkan siswa dalam dinamika kelompok kelas secara perlahan, mintakan teman sebaya untuk merangkul.'
    } else if (gejalaInput.includes('G13') && gejalaInput.includes('G11')) {
      kesimpulan = 'Konseling Sosial & Pergaulan'
      aturanDipakai = 'IF Ada laporan menjadi korban ejekan AND Sering menyendiri THEN Konseling Sosial'
      saran = 'Lakukan mediasi tertutup dengan pihak yang terlibat, pastikan ruang aman bagi korban.'
    } else if (gejalaInput.includes('G14') && gejalaInput.includes('G12')) {
      kesimpulan = 'Konseling Sosial & Pergaulan'
      aturanDipakai = 'IF Takut bergabung dengan kelompok AND Menghindari kontak mata THEN Konseling Sosial'
      saran = 'Berikan bimbingan cara komunikasi asertif dasar.'
    }

    // --- DIAGNOSIS 4: Konseling Psikologis / Emosional ---
    else if (gejalaInput.includes('G15') && gejalaInput.includes('G16')) {
      kesimpulan = 'Konseling Psikologis / Emosional'
      aturanDipakai = 'IF Mudah marah/meledak-ledak AND Sering melawan teguran guru THEN Konseling Psikologis'
      saran = 'Lakukan konseling personal 4 mata untuk identifikasi pemicu stres (anger management).'
    } else if (gejalaInput.includes('G17')) {
      kesimpulan = 'Konseling Psikologis / Emosional'
      aturanDipakai = 'IF Sering menangis tanpa sebab / terlihat murung THEN Konseling Psikologis'
      saran = 'Berikan ruang aman untuk venting (curhat). Rujuk ke psikolog profesional jika ada indikasi depresi.'
    } else if (gejalaInput.includes('G15') && gejalaInput.includes('G09')) {
      kesimpulan = 'Konseling Psikologis / Emosional'
      aturanDipakai = 'IF Mudah marah/meledak-ledak AND Sering berkeliaran di luar kelas THEN Konseling Psikologis'
      saran = 'Gali kemungkinan masalah di rumah yang mempengaruhi stabilitas emosi di sekolah.'
    }

    // --- DIAGNOSIS 5: Apresiasi & Motivasi (Lanjutan) ---
    else if (gejalaInput.includes('G18') && gejalaInput.includes('G19')) {
      kesimpulan = 'Apresiasi & Motivasi Lanjutan'
      aturanDipakai = 'IF Kehadiran 100% dan nilai stabil AND Aktif berorganisasi THEN Apresiasi & Motivasi'
      saran = 'Pertahankan prestasi, rekomendasikan siswa untuk beasiswa atau program siswa berprestasi.'
    } else if (gejalaInput.includes('G19') && gejalaInput.includes('G20')) {
      kesimpulan = 'Apresiasi & Motivasi Lanjutan'
      aturanDipakai = 'IF Aktif berorganisasi AND Mampu memimpin kelompok THEN Apresiasi & Motivasi'
      saran = 'Libatkan siswa sebagai mentor sebaya untuk membantu teman-temannya yang kesulitan.'
    } else if (gejalaInput.includes('G18') && !gejalaInput.includes('G10')) {
      kesimpulan = 'Apresiasi & Motivasi Lanjutan'
      aturanDipakai = 'IF Kehadiran 100% AND Tidak Melanggar Aturan Berat THEN Apresiasi & Motivasi'
      saran = 'Berikan piagam penghargaan atau pujian lisan rutin.'
    }

    return { kesimpulan, aturanDipakai, saran }
  }

  return { studentData, daftarGejala, prosesDiagnosa }
}