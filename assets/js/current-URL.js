window.onload = function() {
    document.getElementById("url-display").innerHTML = document.URL;
};

// Get the full URL
const fullUrl = document.URL;

// Remove https:// and keep www.
const cleanUrl = fullUrl.replace(/^https?:\/\//, '').replace(/^www\./, '');

// Display in the page
document.getElementById('currentUrl').textContent = `https://www.${cleanUrl}`;
