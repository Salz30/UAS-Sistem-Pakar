<template>
  <main class="container mx-auto p-4 max-w-2xl">
    <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
      <h1 class="text-2xl font-bold mb-2">Laporan Hasil Diagnosa</h1>
      <p class="text-gray-500 mb-6">Berikut adalah kesimpulan otomatis dari Sistem Pakar.</p>
      
      <div class="bg-gray-100 p-4 rounded mb-6">
        <p><span class="font-semibold w-16 inline-block">Nama</span>: {{ student.nama }}</p>
        <p><span class="font-semibold w-16 inline-block">NISN</span>: {{ student.nisn }}</p>
      </div>
      
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-bold text-red-600 flex items-center"><span class="mr-2">🩺</span> Kesimpulan:</h3>
          <p class="text-xl font-semibold mt-1">{{ student.hasilDiagnosa?.kesimpulan }}</p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-slate-700 flex items-center"><span class="mr-2">⚙️</span> Aturan yang Digunakan (Rule):</h3>
          <p class="mt-1 bg-slate-800 text-green-400 p-3 rounded font-mono text-sm leading-relaxed">
            {{ student.hasilDiagnosa?.aturanDipakai }}
          </p>
        </div>

        <div>
          <h3 class="text-lg font-bold text-green-600 flex items-center"><span class="mr-2">💡</span> Saran / Solusi:</h3>
          <p class="mt-1 text-gray-700 leading-relaxed">{{ student.hasilDiagnosa?.saran }}</p>
        </div>
      </div>
      
      <button @click="resetDanKembali" class="mt-8 w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 px-4 rounded transition">
        &larr; Lakukan Diagnosa Ulang
      </button>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

const { studentData: student } = useExpertSystem()
const router = useRouter()

// Proteksi: Jika ada yang akses /hasil tanpa isi form, tendang balik ke depan
if (!student.value.hasilDiagnosa) {
  router.push('/')
}

const resetDanKembali = () => {
  // Kosongkan gejala dan hasil agar form bersih kembali
  student.value.gejalaTerpilih = []
  student.value.hasilDiagnosa = null
  router.push('/')
}
</script>