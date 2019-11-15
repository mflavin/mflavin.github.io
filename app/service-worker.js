var cacheName = 'cache-update-and-refresh';
var cacheFiles = [
    './',
    './index.js',
    // list all the assests you want to list
]



self.addEventListener('install', event => {
    console.log("[serviceWorker] installed")

    event.waitUntil(
      caches.open(cacheName)
        .then(cache => {
          return cache.addAll(cacheFiles)
        });
    );
    console.log("[serviceWorker] Cached")
})

self.addEventListener('activate', (event) => {
    console.info('Event: Activate');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cache) => {
                }).map(function(cache) {
                  return caches.delete(cache); //Deleting the cache
                })
            });
        })
    );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(() => {
      console.log('caught fetch..');
      return caches.match(event.request);
    })
  );
});
