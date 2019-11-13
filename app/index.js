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
  navigator.serviceWorker.register('./service-worker.js');
  // navigator.serviceWorker.register('./service-worker.js').then(reg => {
  //   console.log('reg');
  //   reg.addEventListener('updatefound', () => {
  //     // A wild service worker has appeared in reg.installing!
  //     console.log('updatefound');
  //     newWorker = reg.installing;
  //
  //     newWorker.addEventListener('statechange', () => {
  //       console.log('statechange');
  //       // Has network.state changed?
  //       switch (newWorker.state) {
  //         case 'installed':
  //           if (navigator.serviceWorker.controller) {
  //             // new update available
  //             console.log('new update available');
  //             showUpdateBar();
  //           }
  //           // No update available
  //           console.log('No update available');
  //           break;
  //       }
  //     });
  //   });
  // });

  navigator.serviceWorker.onmessage = function (evt) {
    console.log('onmessage');
    var message = JSON.parse(evt.data);
    console.log('message, ', message);

    var isRefresh = message.type === 'refresh';
    var lastETag = localStorage.currentETag;

    console.log('lastETag !== message.eTag; ==> ', lastETag + '' + message.eTag);
    var isNew =  lastETag !== message.eTag;

    if (isRefresh && isNew) {
      // Escape the first time (when there is no ETag yet)
      if (lastETag) {
        console.log('\n\n New Content Here! \n\n');
        // Inform the user about the update
      }
      localStorage.currentETag = message.eTag;
      console.log('new ETAG, ', localStorage.currentETag + '\n\n');
    }
  };

  let refreshing;
  navigator.serviceWorker.addEventListener('controllerchange', function () {
    if (refreshing) return;
    window.location.reload();
    refreshing = true;
  });
}
