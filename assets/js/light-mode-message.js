const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
if (isLight) {
  document.getElementById('message-banner').style.display = 'block';
}

const closeButton = document.getElementById('closeBtn');
const targetDiv = document.getElementById('myDiv');

closeButton.addEventListener('click', () => {
  targetDiv.style.display = 'none'; 
});