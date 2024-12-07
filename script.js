
function showDetails(card) {
  // Ambil data dari atribut data-*
  const title = card.closest('.pet-card').dataset.title;
  const description = card.closest('.pet-card').dataset.description;
  const status = card.closest('.pet-card').dataset.status;
  const location = card.closest('.pet-card').dataset.location;
  const contact = card.closest('.pet-card').dataset.contact;

  // Ganti konten di area deskripsi
  document.getElementById('detail-title').innerText = title;
  document.getElementById('detail-description').innerText = description;
  document.getElementById('detail-status').innerText = status;
  document.getElementById('detail-location').innerText = location;
  document.getElementById('detail-contact').innerText = contact;

 
  document.getElementById('description-container').scrollIntoView({ behavior: 'smooth' });
}

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
  const deskripsiId = urlParams.get('deskripsi');

  // Acak urutan kartu terlebih dahulu
  acakKartu();

  // Sembunyikan semua berita dan deskripsi
  sembunyikanSemua('deskripsi', 8); 


  if (deskripsiId && deskripsiId >= 1 && deskripsiId <= 8) {
    document.getElementById(`deskripsi${deskripsiId}`).classList.remove('hidden');
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


// Function to toggle love button and store data in localStorage
function toggleLove(button, id, name, imgSrc) {
  // Get the saved loves from localStorage
  let loves = JSON.parse(localStorage.getItem("lovedPets")) || [];

  // Check if the pet is already loved
  const petIndex = loves.findIndex((pet) => pet.id === id);
  if (petIndex > -1) {
    // Remove pet from loves if it's already saved
    loves.splice(petIndex, 1);
    button.classList.remove("loved");
  } else {
    // Add pet to loves
    loves.push({ id, name, imgSrc });
    button.classList.add("loved");
  }

  // Save the updated loves back to localStorage
  localStorage.setItem("lovedPets", JSON.stringify(loves));
}

// Preload loved pets to highlight hearts
document.addEventListener("DOMContentLoaded", () => {
  const loves = JSON.parse(localStorage.getItem("lovedPets")) || [];
  document.querySelectorAll(".btn-love").forEach((button) => {
    const petId = button.getAttribute("onclick").match(/'(\d+)'/)[1];
    if (loves.some((pet) => pet.id === petId)) {
      button.classList.add("loved");
    }
  });
});


function searchCategory() {
  const input = document.getElementById('searchBar').value.toLowerCase();

  // Ambil bagian kucing dan anjing
  const kucingSection = document.getElementById('kucingSection');
  const anjingSection = document.getElementById('anjingSection');

  // Ambil semua kartu hewan
  const cards = document.querySelectorAll('.pet-card');

 

  // Filter kartu hewan berdasarkan input
  cards.forEach((card) => {
    const titleElement = card.querySelector('.card-title');
    if (titleElement) {
      const title = titleElement.innerText.toLowerCase();
      if (title.includes(input)) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none'; 
      }
    }
  });
}

// form
// Fungsi untuk menampilkan pop-up
function showPopup() {
  const popup = document.getElementById('successPopup');
  if (popup) {
    popup.classList.remove('hidden'); 
  } else {
    console.error('Elemen successPopup tidak ditemukan.');
  }
}

// Fungsi untuk menyembunyikan pop-up
function closePopup() {
  const popup = document.getElementById('successPopup');
  if (popup) {
    popup.classList.add('hidden'); 
  } else {
    console.error('Elemen successPopup tidak ditemukan.');
  }
}

function updateModalImage(element, modalImageId) {
  const modalImage = document.getElementById(modalImageId);
  modalImage.src = element.src; 
}