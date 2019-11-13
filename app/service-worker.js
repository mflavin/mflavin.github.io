var cacheName = 'secondVersion';

self.addEventListener('activate', function(event) {
  console.log('worker active :D');
});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([
        './index.html'
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  console.log('fetch event, ',event);
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          console.log("response.headers.get('ETag')");
          console.log(response.headers.get('ETag'));
          return response;
        }
        return fetch(event.request);
      })
  );
});
