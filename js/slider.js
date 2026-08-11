const testimonialCards = document.querySelectorAll('.testimonial-card');
if (testimonialCards.length) {
  let index = 0;
  setInterval(() => {
    testimonialCards.forEach((card, cardIndex) => {
      card.classList.toggle('active', cardIndex === index);
    });
    index = (index + 1) % testimonialCards.length;
  }, 5000);
}

const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    galleryItems.forEach((item) => {
      item.style.display = filter === 'all' || item.dataset.category === filter ? 'block' : 'none';
    });
  });
});
