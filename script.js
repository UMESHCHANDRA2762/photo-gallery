const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

function openModal(src) {
  modal.style.display = 'flex';
  modalImg.src = src;
}

function closeModal() {
  modal.style.display = 'none';
  modalImg.src = "";
}

// Optional: Close modal on ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});