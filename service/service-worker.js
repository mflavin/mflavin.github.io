// Listen for messages from clients.
self.addEventListener('message', function(event) {

  console.log('worker message gotten :D', event);

  // Get all the connected clients and forward the message along.
  var promise = self.clients.matchAll()
  .then(function(clientList) {
    // event.source.id contains the ID of the sender of the message.
    var senderID = event.source.id;

    clientList.forEach(function(client) {
      // Skip sending the message to the client that sent it.
      if (client.id === senderID) {
        return;
      }
      client.postMessage({
        client: senderID,
        message: event.data
      });
    });
  });

  // If event.waitUntil is defined, use it to extend the
  // lifetime of the Service Worker.
  if (event.waitUntil) {
    event.waitUntil(promise);
  }
});

// Immediately claim any new clients. This is not needed to send messages, but
// makes for a better demo experience since the user does not need to refresh.
// A more complete example of this given in the immediate-claim recipe.
self.addEventListener('activate', function(event) {
  console.log('worker active :D');
  // event.waitUntil(self.clients.claim());

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// // // Testing Here // // //

var cacheName = 'cache-update-and-refresh';

// On install, cache some resource.
self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        // './index.html'
        './index.js'
      ]))
  );
});

// On fetch, use cache but update the entry with the latest contents
// from the server.
self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
  // You can use `respondWith()` to answer ASAP...
  evt.respondWith(fromCache(evt.request));
  // ...and `waitUntil()` to prevent the worker to be killed until
  // the cache is updated.
  evt.waitUntil(
    update(evt.request)
    // Finally, send a message to the client to inform it about the
    // resource is up to date.
    .then(refresh)
    // .then((e) => {
    //   console.log('e, ,', e);
    //   refresh(e);
    // })
  );
});

// Open the cache where the assets were stored and search for the requested
// resource. Notice that in case of no matching, the promise still resolves
// but it does with `undefined` as value.
function fromCache(request) {
  console.log('===CACHE===');
  return caches.open(cacheName).then(function (cache) {
    return cache.match(request);
  });
}


// Update consists in opening the cache, performing a network request and
// storing the new response data.
function update(request) {
  console.log('===UPDATE===', request);
  return caches.open(cacheName).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response.clone()).then(function () {
        console.log(response);
        return response;
      });
    });
  });
}

// Sends a message to the clients.
function refresh(response) {
  console.log('===REFRESH===', response);
  return self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      // Encode which resource has been updated. By including the
      // [ETag](https://en.wikipedia.org/wiki/HTTP_ETag) the client can
      // check if the content has changed.
      var message = {
        type: 'refresh',
        url: response.url,
        // Notice not all servers return the ETag header. If this is not
        // provided you should use other cache headers or rely on your own
        // means to check if the content has changed.
        eTag: response.headers.get('ETag'),
        lmd: response.headers.get('Last-Modified')
      };
      // Tell the client about the update.
      client.postMessage(JSON.stringify(message));
    });
  });
}
