window.onload = function() {
    document.getElementById("currentUrl").innerHTML = document.URL;
};

// Get the full URL
const fullUrl = document.URL;

// Remove https://
const cleanUrl = fullUrl.replace(/^https?:\/\//, '');

// Display in the page
document.getElementById('currentUrl').textContent = cleanUrl;