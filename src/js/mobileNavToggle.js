export function initializeMobileNav() {
    const menuToggleBTN = document.getElementById('menuToggleBTN');
    const mobileNavList = document.getElementById('mobileNavList');
  
    if (menuToggleBTN && mobileNavList) {
      menuToggleBTN.addEventListener('click', () => {
        mobileNavList.classList.toggle('hidden');
      });
    }
  }
  