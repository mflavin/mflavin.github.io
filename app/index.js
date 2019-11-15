document.addEventListener("DOMContentLoaded", function() {
  var APP_PREFIX = 'ApplicationName_'     // Identifier for this app (this needs to be consistent across every cache update)
  var VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
  var CACHE_NAME = APP_PREFIX + VERSION
  document.body.style.background = "darkblue";
  document.getElementById('reload').addEventListener('click', function() {
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key, i) {
        console.log('deleting cache : ' + keyList[i] )
        return caches.delete(keyList[i])
      }))
    })
    location.reload(true);
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
