/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
const handler = workbox.precaching.createHandlerBoundToURL('/');
const navigationRoute = new workbox.routing.NavigationRoute(handler);
workbox.routing.registerRoute(navigationRoute);
