// navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.asep-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const beritaId = urlParams.get('berita');
    const deskripsiId = urlParams.get('deskripsi');
  
    // Acak urutan kartu terlebih dahulu (jika diperlukan)
    acakKartu();
  
    // Sembunyikan semua berita dan deskripsi
    sembunyikanSemua('berita', 5); 
    sembunyikanSemua('deskripsi', 8); 
  
    // Pastikan jika beritaId ada, kita akan menampilkan berita yang dipilih
    if (beritaId && beritaId >= 1 && beritaId <= 5) {
      const beritaElement = document.getElementById(`berita${beritaId}`);
      if (beritaElement) {
        beritaElement.classList.remove('hidden'); 
      }
    }
  
    // Jika deskripsiId ada, tampilkan deskripsi yang dipilih
    if (deskripsiId && deskripsiId >= 1 && deskripsiId <= 8) {
      const deskripsiElement = document.getElementById(`deskripsi${deskripsiId}`);
      if (deskripsiElement) {
        deskripsiElement.classList.remove('hidden'); 
      }
    }
  };
  
  // Fungsi untuk mengacak urutan kartu
  function acakKartu() {
    const container = document.getElementById('cards-container');
    const cards = Array.from(container.children);
    
    // Mengacak urutan kartu
    cards.sort(() => Math.random() - 0.5);
  
    // Menambahkan kembali kartu yang sudah diacak ke dalam container
    cards.forEach(card => container.appendChild(card));
  }
  
  // Fungsi untuk menyembunyikan elemen berdasarkan prefix dan jumlah
  function sembunyikanSemua(prefix, count) {
    for (let i = 1; i <= count; i++) {
      const element = document.getElementById(`${prefix}${i}`);
      if (element) {
        element.classList.add('hidden');
      }
    }
  }
  
  window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const beritaId = urlParams.get('berita'); 
    
    // Sembunyikan semua berita terlebih dahulu
    sembunyikanSemua('berita', 5); 
  
    // Tampilkan berita yang sesuai berdasarkan parameter 'berita'
    if (beritaId && beritaId >= 1 && beritaId <= 5) {
      const beritaElement = document.getElementById(`berita${beritaId}`);
      if (beritaElement) {
        beritaElement.classList.remove('hidden'); 
      }
    }
  };
  
  // Fungsi untuk menyembunyikan semua berita
  function sembunyikanSemua(prefix, count) {
    for (let i = 1; i <= count; i++) {
      const element = document.getElementById(`${prefix}${i}`);
      if (element) {
        element.classList.add('hidden'); 
      }
    }
  }
  
  window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const beritaId = urlParams.get('berita'); 
    
    // Sembunyikan semua berita terlebih dahulu
    sembunyikanSemua('berita', 5); 
  
    // Tampilkan berita yang sesuai berdasarkan parameter 'berita'
    if (beritaId && beritaId >= 1 && beritaId <= 5) {
      const beritaElement = document.getElementById(`berita${beritaId}`);
      if (beritaElement) {
        beritaElement.classList.remove('hidden'); 
      }
    }
  };
  
  // Fungsi untuk menyembunyikan semua berita
  function sembunyikanSemua(prefix, count) {
    for (let i = 1; i <= count; i++) {
      const element = document.getElementById(`${prefix}${i}`);
      if (element) {
        element.classList.add('hidden'); 
      }
    }
  }
  