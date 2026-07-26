const isLight = window.matchMedia('(prefers-color-scheme: light)').matches;
if (isLight) {
  document.getElementById('message-banner').style.display = 'block';
}
