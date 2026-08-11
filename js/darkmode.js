const themeToggle = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('northstar-theme') || 'dark';
document.documentElement.setAttribute('data-theme', storedTheme);
if (themeToggle) themeToggle.textContent = storedTheme === 'dark' ? '☀️' : '🌙';

themeToggle?.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('northstar-theme', currentTheme);
  themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
});
