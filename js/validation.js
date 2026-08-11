const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');

function validateForm(form) {
  const fields = form.querySelectorAll('input, textarea, select');
  let valid = true;
  fields.forEach((field) => {
    if (!field.value.trim()) {
      valid = false;
      field.style.borderColor = '#fb923c';
    } else {
      field.style.borderColor = 'var(--border)';
    }
  });
  return valid;
}

[bookingForm, contactForm].forEach((form) => {
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const messageBox = form.querySelector('.form-message');
    if (validateForm(form)) {
      messageBox.textContent = 'Thanks! We will reach out shortly.';
      form.reset();
    } else {
      messageBox.textContent = 'Please fill in all the fields.';
    }
  });
});
