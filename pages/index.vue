<template>
  <main class="container mx-auto p-4 max-w-2xl">
    <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-teal-500">
      <h1 class="text-2xl font-bold mb-2">Diagnosa Konseling</h1>
      <p class="text-gray-500 mb-6">Silakan masukkan data siswa dan centang gejala yang terlihat.</p>
      
      <div class="mb-6 space-y-4">
        <div>
          <label class="block font-semibold mb-1">Nama Siswa:</label>
          <input v-model="student.nama" type="text" placeholder="Masukkan nama..." class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label class="block font-semibold mb-1">NISN (Harus Angka):</label>
          <input v-model="student.nisn" type="number" placeholder="Masukkan NISN..." class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <hr class="my-6">

      <h2 class="text-xl font-bold mb-4">Pilih Gejala yang Terlihat (Minimal 1):</h2>
      <div class="space-y-2 mb-8 bg-slate-50 p-4 rounded border">
        <label v-for="gejala in daftarGejala" :key="gejala.id" class="flex items-start space-x-3 cursor-pointer">
          <input type="checkbox" :value="gejala.id" v-model="student.gejalaTerpilih" class="mt-1 w-4 h-4 text-teal-600 rounded" />
          <span class="text-gray-700">{{ gejala.nama }}</span>
        </label>
      </div>

      <button @click="jalankanDiagnosa" class="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded transition">
        Proses Diagnosa Sekarang
      </button>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

// Memanggil otak pakar dari composables
const { studentData: student, daftarGejala, prosesDiagnosa } = useExpertSystem()
const router = useRouter()

const jalankanDiagnosa = () => {
  // Validasi sederhana: pastikan nama dan NISN (format angka) terisi
  if (!student.value.nama || !student.value.nisn || student.value.nisn === '') {
    alert("Harap isi Nama dan NISN dengan format angka yang benar sebelum memproses!")
    return
  }

  if (student.value.gejalaTerpilih.length === 0) {
    alert("Harap centang minimal 1 gejala yang terlihat!")
    return
  }
  
  // Menjalankan evaluasi 15 Aturan IF-THEN
  student.value.hasilDiagnosa = prosesDiagnosa(student.value.gejalaTerpilih)
  
  // Lemparkan pengguna ke halaman hasil
  router.push('/hasil')
}
</script>