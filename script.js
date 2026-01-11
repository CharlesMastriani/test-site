// =====================
// HAMBURGER MENU TOGGLE
// =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// =====================
// SMOOTH GLIDING NAVBAR
// =====================
const navbar = document.querySelector('.navbar');

if (navbar) {
  const startTop = 24;
  let currentTop = startTop;

  function updateNavbar() {
    const scrollY = window.scrollY;
    const targetTop = startTop + scrollY;
    currentTop += (targetTop - currentTop) * 0.25;
    navbar.style.top = `${currentTop}px`;
    requestAnimationFrame(updateNavbar);
  }

  requestAnimationFrame(updateNavbar);
}

// =====================
// SCROLL TO TOP ON LOGO CLICK
// =====================
const logoLink = document.querySelector('.navbar-logo');

if (logoLink) {
  logoLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =====================
// GALLERY CLICK-TO-EXPAND MODAL
// =====================
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

if (modal && modalImg && modalClose) {
  const galleryImages = document.querySelectorAll('.gallery-grid img');

  const openModal = (img) => {
    modal.classList.add('active');
    modalImg.src = img.src;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    modalImg.src = '';
    document.body.style.overflow = '';
  };

  galleryImages.forEach(img => {
    img.addEventListener('click', () => openModal(img));
  });

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// =====================
// BOOKING FORM SUBMISSION
// =====================
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
  bookingForm.addEventListener('submit', function () {
    const priceBox = document.getElementById('service-price');
    if (priceBox) {
      priceBox.innerHTML = `<span>Price:</span> <span class="price-number">—</span>`;
    }
  });
}

// =====================
// BOOKING SERVICE PRICE LOGIC
// =====================
const serviceSelect = document.getElementById('service');
const priceBox = document.getElementById('service-price');

if (serviceSelect && priceBox) {
  const servicePrices = {
    "Premium Hand Wash": "$35",
    "Full Detail": "Coming Soon",
    "Vehicle Service": "Coming Soon",
    "Modifications": "Coming Soon"
  };

  serviceSelect.addEventListener('change', () => {
    const value = serviceSelect.value;
    const priceText = servicePrices[value] || "—";
    priceBox.innerHTML = `<span>Price:</span> <span class="price-number">${priceText}</span>`;
  });
}
