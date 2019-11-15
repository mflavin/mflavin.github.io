var cacheName = 'cache-update-and-refresh';
var cacheFiles = [
    './',
    './index.js',
    // list all the assests you want to list
]



self.addEventListener('install', function (e) {
    console.log("[serviceWorker] installed")

    e.waitUntil(
        caches.open('default-cache').then(function (cache) {
            return cache.addAll(cacheFiles)
        }).then(function () {
            return self.skipWaiting();
        }));
    console.log("[serviceWorker] Cached")
})

self.addEventListener('activate', (event) => {
    console.info('Event: Activate');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {     //cacheName = 'cache-v1'
                        return caches.delete(cache); //Deleting the cache
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('Navigation Changes?');
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
    event.waitUntil(
      update(event.request)
        .then(refresh)
        //   function (response) {
        //   caches.open(cacheName).then(function (cache) {
        //     caches.match(event.request).then(function (cacheresponse) {
        //         console.log('event.request, ',event.request);
        //         console.log('cacheresponse, ',cacheresponse );
        //         console.log(cacheresponse.headers.get("ETag" || ''));
        //         if ((cacheresponse.headers.get("ETag" || '')) !== response.headers.get("ETag")) {
        //           console.log('[ServiceWorker]' + response.url + ' - Cache' + cacheresponse.headers.get("ETag") + "- real" + response.headers.get("ETag"));
        //           cache.put(event.request, response.clone()).then(function () {
        //               refresh(event.request, response);
        //           });
        //         }
        //     });
        //   });
        // }
      // )
    )
});

function fromCache(request) {
    return caches.open(cacheName).then(function (cache) {
        return cache.match(request);
    });
}

function update(request) {
    return caches.open(cacheName).then(function (cache) {
        return fetch(request).then(function (response) {
            return response;
        });
    });
}


function refresh(response) {
    return self.clients.matchAll().then(function (clients) {
        clients.forEach(function (client) {
            var message = {
                type: 'refresh',
                url: response,
                eTag: response.headers.get('ETag')
            };
            client.postMessage(JSON.stringify(message));
        });
    });
}
