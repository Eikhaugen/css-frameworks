const themeToggle = document.querySelector('.themeToggle');
const icon = document.querySelector('.themeIcon');

export function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    document.documentElement.classList.remove('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

export function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  setTheme(isDark);


  themeToggle.addEventListener('click', () => {
    const currentIsDark = document.documentElement.classList.contains('dark');
    const newIsDark = !currentIsDark;
    setTheme(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  });
}
