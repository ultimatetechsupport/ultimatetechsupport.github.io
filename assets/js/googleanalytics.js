// Define your Google Analytics Measurement ID
const ga_id = "G-XW7Q3GKJGT";

// 1. Dynamically create and load the external Google Tag Manager script
const ga_script = document.createElement('script');
ga_script.async = true;
ga_script.src = `https://googletagmanager.com{ga_id}`;
document.head.appendChild(ga_script);

// 2. Initialize the dataLayer and the gtag function
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

// 3. Configure Google Analytics with your ID
gtag('js', new Date());
gtag('config', ga_id);