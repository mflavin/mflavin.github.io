document.addEventListener("DOMContentLoaded", function() {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js', { scope: './' })
        .then(function (registration) {
            console.log("Service worker registered", registration)
        })
        .catch(function (err) {
            console.log("Service Worker Failes to Register", err)
        })

    navigator.serviceWorker.addEventListener('message', function (event) {
        document.getElementById("snackbar").classList.add('show');
        console.log("Got reply from service worker: " + event.data);
    });
}

});
