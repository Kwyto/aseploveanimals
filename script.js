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


  acakKartu();


  sembunyikanSemua('deskripsi', 8); 


  if (deskripsiId && deskripsiId >= 1 && deskripsiId <= 8) {
    document.getElementById(`deskripsi${deskripsiId}`).classList.remove('hidden');
  }
};

// Fungsi untuk mengacak urutan kartu
function acakKartu() {
  const container = document.getElementById('cards-container');
  const cards = Array.from(container.children);
  

  cards.sort(() => Math.random() - 0.5);

 
  cards.forEach(card => container.appendChild(card));
}



// Fungsi love di simpan di lokal storage
function toggleLove(button, id, name, imgSrc) {
 
  let loves = JSON.parse(localStorage.getItem("lovedPets")) || [];

  
  const petIndex = loves.findIndex((pet) => pet.id === id);
  if (petIndex > -1) {
   
    loves.splice(petIndex, 1);
    button.classList.remove("loved");
  } else {

    loves.push({ id, name, imgSrc });
    button.classList.add("loved");
  }

 
  localStorage.setItem("lovedPets", JSON.stringify(loves));
}


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