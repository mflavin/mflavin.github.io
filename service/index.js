document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('alertA').addEventListener('click', function() {
    console.log('reload');
    location.reload();
  });


  var CACHE = 'cache-update-and-refresh';
  // Only setup the demo if service workers are supported.
  if (navigator.serviceWorker) {
    // Get the DOM nodes for our UI.
    var message = document.getElementById('message');
    var received = document.getElementById('received');
    var status = document.getElementById('status');
    var inbox = {};

    // Give an indicator that service workers are supported.
    status.textContent = 'supported';

    // navigator.serviceWorker.register('./service-worker.js');

    navigator.serviceWorker.register('./service-worker.js').then((reg) => {
      console.log(reg, 'reg');
      // updatefound is fired if service-worker.js changes.
      reg.onupdatefound = function () {
        console.log('onupdatefound');
        // The updatefound event implies that reg.installing is set; see
        // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
        const installingWorker = reg.installing;

        installingWorker.onstatechange = function () {
          console.log('onstatechange');
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and the fresh content will
                // have been added to the cache.
                // It's the perfect time to display a "New content is available; please refresh."
                // message in the page's interface.
                console.log('New or updated content is available.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a "Content is cached for offline use." message.
                console.log('Content is now available offline!');
              }
              break;

            case 'redundant':
              console.error('The installing service worker became redundant.');
              break;
          }
        };
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });


    navigator.serviceWorker.onmessage = function (evt) {
      document.getElementById('alert').classList.remove('show');
      var message = JSON.parse(evt.data);

      var isRefresh = message.type === 'refresh';
      var lastETag = localStorage.currentETag;

      // [ETag](https://en.wikipedia.org/wiki/HTTP_ETag) header usually contains
      // the hash of the resource so it is a very effective way of check for fresh
      // content.
      console.log('lastETag !== message.eTag; ==> ', lastETag + '' + message.eTag);
      var isNew =  lastETag !== message.eTag;

      console.log('===============');
      console.log('message, ', message);
      console.log('isRefresh, ', isRefresh);
      console.log('lastETag, ', lastETag);
      console.log('nunu ,',isNew);
      console.log('===============');

      if (isRefresh && isNew) {
        // Escape the first time (when there is no ETag yet)
        if (lastETag) {
          console.log('\n\n New Content Here! \n\n');
          // Inform the user about the update
          document.getElementById('alert').classList.add('show');
        }
        // For teaching purposes, although this information is in the offline
        // cache and it could be retrieved from the service worker, keeping track
        // of the header in the `localStorage` keeps the implementation simple.
        localStorage.currentETag = message.eTag;
        console.log('new ETAG, ', localStorage.currentETag);
      }
    };

    // Listen for any messages from the service worker.
    navigator.serviceWorker.addEventListener('message', function(event) {
      console.log('index.js message gotten');
      // A message has been received, now show the message on the page.
      var clientId = event.data.client;
      var node;
      // A message from this client hasn't been received before, so we need to
      // setup a place to show its messages.
      if (!inbox[clientId]) {
        node = document.createElement('div');
        received.appendChild(node);
        inbox[clientId] = node;
      }
      // Show the message.
      node = inbox[clientId];
      node.textContent = 'Client ' + clientId + ' says: ' + event.data.message;
    });

    message.addEventListener('input', function() {
      console.log('index.js input gotten');
      // There isn't always a service worker to send a message to. This can happen
      // when the page is force reloaded.
      if (!navigator.serviceWorker.controller) {
        status.textContent = 'error: no controller';
        return;
      }
      // Send the message to the service worker.
      navigator.serviceWorker.controller.postMessage(message.value);
    });
  }
});
