// 1. Initialize the global dataLayer array and gtag function
window.dataLayer = window.dataLayer || [];
function gtag(){ dataLayer.push(arguments); }

// 2. Configure initial timestamps and tracking ID
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); 

// 3. Dynamically inject the external Google Analytics script tag into the HTML document
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://googletagmanager.com';
    
    // Inject the script into the <head> of the document
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(gaScript, firstScript);
})();
