const loadingScreen = document.querySelector('.loading-screen');
const backToTop = document.querySelector('.back-to-top');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('load', () => {
  setTimeout(() => loadingScreen?.classList.add('hidden'), 500);
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / maxHeight) * 100;
  progressBar.style.width = `${progress}%`;
  backToTop.style.display = scrollTop > 600 ? 'grid' : 'none';
});

backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });
revealItems.forEach((item) => revealObserver.observe(item));

const galleryCards = document.querySelectorAll('.gallery-card');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox?.querySelector('img');
const closeLightbox = document.querySelector('.lightbox-close');

galleryCards.forEach((card) => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

closeLightbox?.addEventListener('click', () => lightbox.classList.remove('active'));
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.classList.remove('active');
});

const counters = document.querySelectorAll('.counter');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = Number(entry.target.dataset.target);
      let value = 0;
      const duration = 1400;
      const step = Math.ceil(target / (duration / 16));
      const interval = setInterval(() => {
        value += step;
        if (value >= target) {
          entry.target.textContent = `${target}`;
          clearInterval(interval);
        } else {
          entry.target.textContent = `${value}`;
        }
      }, 16);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });
counters.forEach((counter) => countObserver.observe(counter));
