const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

// Open modal when image is clicked
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });

  // Accessibility: Open modal on Enter or Space
  img.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      modal.style.display = 'flex';
      modalImg.src = this.src;
    }
  });
});

// Close modal when clicking close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});

// Close modal when clicking outside the image
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalImg.src = '';
  }
});

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
    modalImg.src = '';
  }
});
