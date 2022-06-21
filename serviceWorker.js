/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');
const revision = '062120220605';
const cacheFiles = [
  {
		revision,
    url: '/',
	},
  {
		revision,
    url: '/com/',
	},
	{
		revision,
    url: '/tallyHo/',
	}
];

self.__precacheManifest = cacheFiles.concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg|ttf)|$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);
