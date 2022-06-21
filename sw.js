importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js',
);

workbox.setConfig({
  debug: true,
});

// Swap in NetworkOnly, CacheFirst, or StaleWhileRevalidate as needed.
const strategy = new workbox.strategies.StaleWhileRevalidate({
  cacheName: 'cached-navigations',
  plugins: [
    // Any plugins, like workbox.expiration, etc.
  ],
});

const navigationRoute = new workbox.routing.NavigationRoute(strategy);

workbox.routing.registerRoute(navigationRoute);

workbox.core.skipWaiting();
workbox.core.clientsClaim();