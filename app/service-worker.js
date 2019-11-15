var APP_PREFIX = 'ApplicationName_'     // Identifier for this app (this needs to be consistent across every cache update)
var VERSION = 'version_01'              // Version of the off-line cache (change this value everytime you want to update cache)
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [                            // Add URL you want to cache in this list.
  '/app/',                     // If you have separate JS/CSS files,
  '/app/index.html',           // add path to those files here
  '/app/index.js'
]


self.addEventListener('fetch', function (event) {
  console.log('fetch...');
  event.respondWith(
    fetch(() => {
      self.clients.matchAll().then(function (clients) {
        clients.forEach(function (client) {
          // Encode which resource has been updated. By including the
          // [ETag](https://en.wikipedia.org/wiki/HTTP_ETag) the client can
          // check if the content has changed.
          var message = {
            type: 'refresh',
            url: event.request.url,
            // Notice not all servers return the ETag header. If this is not
            // provided you should use other cache headers or rely on your own
            // means to check if the content has changed.
            eTag: event.request.headers.get('ETag'),
            lmd: event.request.headers.get('Last-Modified')
          };
          // Tell the client about the update.
          client.postMessage(JSON.stringify(message));
        });
      });
      return event.request;
    }).catch(() => {
      console.log('caught fetch..');
      return caches.match(event.request);
    })
  );
});


// Cache resources
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

// Delete outdated caches
self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key, i) {
        console.log('deleting cache : ' + keyList[i] )
        return caches.delete(keyList[i])
      }))
    })
  )
})
