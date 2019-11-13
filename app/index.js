let newWorker;

function showUpdateBar() {
  let snackbar = document.getElementById('snackbar');
  snackbar.className = 'show';
}

// The click event on the pop up notification
document.getElementById('reload').addEventListener('click', function(){
  newWorker.postMessage({ action: 'skipWaiting' });
});

if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('./service-worker.js').then(reg => {
    console.log('reg');
    reg.addEventListener('updatefound', () => {
      // A wild service worker has appeared in reg.installing!
      console.log('updatefound');
      newWorker = reg.installing;

      newWorker.addEventListener('statechange', () => {
        console.log('statechange');
        // Has network.state changed?
        switch (newWorker.state) {
          case 'installed':
            if (navigator.serviceWorker.controller) {
              // new update available
              console.log('new update available');
              showUpdateBar();
            }
            // No update available
            console.log('No update available');
            break;
        }
      });
    });
  });

  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
}
