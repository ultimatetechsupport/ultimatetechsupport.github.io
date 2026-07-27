window.onload = function() {
    document.getElementById("currentUrl").innerHTML = document.URL;
};

// Get the full URL
const fullUrl = document.URL;

// Display in the page
document.getElementById('currentUrl').textContent = fullUrl;