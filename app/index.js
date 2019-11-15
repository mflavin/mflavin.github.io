document.addEventListener("DOMContentLoaded", function() {
  document.body.style.background = "red";
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

    navigator.serviceWorker.addEventListener('message', function (event) {
        console.log("Got reply from service worker: " + event.data);

        var message = JSON.parse(event.data);
        var lastETag = localStorage.currentETag;

        console.log('message.eTag, ', message.eTag);

        var isNew =  lastETag !== message.eTag;

        if (isNew) {
          // Escape the first time (when there is no ETag yet)
          if (lastETag) {
            console.log('\n\n New Content Here! \n\n');
            // Inform the user about the update
            document.getElementById('snackbar').classList.add('show');
          }
          // For teaching purposes, although this information is in the offline
          // cache and it could be retrieved from the service worker, keeping track
          // of the header in the `localStorage` keeps the implementation simple.
          localStorage.currentETag = message.eTag;
        }
    });
}

});
