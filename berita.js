// Fungsi utama saat halaman selesai dimuat
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const beritaId = urlParams.get('berita'); // Ambil parameter 'berita' dari URL

  // Sembunyikan semua elemen berita terlebih dahulu
  sembunyikanSemua('berita', 5);

  // Tampilkan berita yang sesuai berdasarkan parameter 'berita'
  if (beritaId && beritaId >= 1 && beritaId <= 5) {
      const beritaElement = document.getElementById(`berita${beritaId}`);
      if (beritaElement) {
          beritaElement.classList.remove('hidden'); 
      }
  }
};

// Fungsi untuk menyembunyikan semua elemen berita
function sembunyikanSemua(prefix, count) {
  for (let i = 1; i <= count; i++) {
      const element = document.getElementById(`${prefix}${i}`);
      if (element) {
          element.classList.add('hidden'); 
      }
  }
}
