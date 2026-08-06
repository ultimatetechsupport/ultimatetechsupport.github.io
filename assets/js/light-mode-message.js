const banner = document.getElementById('message-banner');
const closeButton = document.getElementById('closeBtn');

const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
if (isLight && banner) {
  banner.style.display = 'flex'; // matches the .banner display type in styles.css
}

if (closeButton && banner) {
  closeButton.addEventListener('click', () => {
    banner.style.display = 'none';
  });
}