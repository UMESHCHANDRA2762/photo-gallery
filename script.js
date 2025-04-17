function openModal(src) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-img').src = src;

  // Disable hover effect when modal is open
  document.body.classList.add('modal-open');
}

// Close modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('modal-open');
}

// Check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Apply hover effect when images are in the viewport
function handleScrollHoverEffect() {
  if (document.body.classList.contains('modal-open')) return; // Skip hover effect if modal is open

  const images = document.querySelectorAll('.gallery img');
  images.forEach(img => {
    if (isInViewport(img)) {
      img.classList.add('hover-simulated');
    } else {
      img.classList.remove('hover-simulated');
    }
  });
}

// Listen for scroll and load events to trigger the hover effect
window.addEventListener('scroll', handleScrollHoverEffect);
window.addEventListener('load', handleScrollHoverEffect); // Trigger on page load