// Fungsi untuk menyembunyikan semua form yang menggunakan prefix tertentu
function sembunyikanSemua(prefix, count) {
  for (let i = 1; i <= count; i++) {
    const element = document.getElementById(`${prefix}${i}`);
    if (element) {
      element.classList.add('hidden');
    }
  }
}

// Fungsi untuk menampilkan form sesuai dengan query parameter
function tampilkanForm() {
  const urlParams = new URLSearchParams(window.location.search);
  const formId = urlParams.get('form'); 

  if (formId) {
    const formElement = document.getElementById(`form${formId}`);
    if (formElement) {
      // Sembunyikan semua form terlebih dahulu
      sembunyikanSemua('form', 8);

      // Tampilkan form yang sesuai
      formElement.classList.remove('hidden');
    }
  }
}

// Tangkap event submit pada semua form
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Menampilkan pesan sukses
    alert('Form submitted successfully! Wait for next email');

  });
});

// Jalankan fungsi saat halaman dimuat
window.onload = function () {
  tampilkanForm();
};

