// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Burger menu ───────────────────────────────────────────
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Skill bar animation on scroll ────────────────────────
const fills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
fills.forEach(fill => observer.observe(fill));

// ── Video Modal Logic ────────────────────────────────────
const modal = document.getElementById('videoModal');
const videoTriggers = document.querySelectorAll('.video-trigger');
const closeModalBtn = document.querySelector('.close-modal');
const video = document.getElementById('projectVideo');

if (modal && video) {
  // Ouvre la modale au clic sur la miniature
  videoTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault(); 
      modal.classList.add('show');
      video.play();
    });
  });

  // Fonction pour fermer la modale
  const closeModal = () => {
    modal.classList.remove('show');
    video.pause();
    video.currentTime = 0; // Remet la vidéo à zéro
  };

  closeModalBtn.addEventListener('click', closeModal);

  // Ferme la modale si on clique dans la zone noire en dehors de la vidéo
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}