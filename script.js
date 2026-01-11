// ===== Hamburger Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// ===== Smooth Gliding Navbar =====
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

// ===== Scroll to Top on Logo Click =====
const logoLink = document.querySelector('.navbar-logo');

if (logoLink) {
  logoLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== Gallery Click-to-Expand Modal =====
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

if (modal && modalImg && modalClose) {
  const galleryImages = document.querySelectorAll('.gallery-grid img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.add('active');
      modalImg.src = img.src;
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// ===== Booking Form Submission =====
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
  bookingForm.addEventListener('submit', function () {
    const priceBox = document.getElementById('service-price');
    if (priceBox) {
      priceBox.innerHTML = `<span>Price:</span> <span class="price-number">—</span>`;
    }
  });
}


// ===== Booking Service Price Logic =====
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
