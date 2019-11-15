document.addEventListener("DOMContentLoaded", function() {
  document.body.style.background = "purple";
  document.getElementById('reload').addEventListener('click', function() {
    window.location.reload();
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js', { updateViaCache: 'none', })
      .then(function (registration) {
        console.log("Service worker registered", registration)
      })
      .catch(function (err) {
        console.log("Service Worker Failes to Register", err)
      })
  }

  navigator.serviceWorker.onmessage = function (evt) {
    console.log('evt, ', evt);
  }

});
