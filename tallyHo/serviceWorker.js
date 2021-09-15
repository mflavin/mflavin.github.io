/* eslint-disable */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.4/workbox-sw.js');
const cacheFiles = [
	{
		revision: '090420212217',
    url: '/tallyHo/',
	}
];

self.__precacheManifest = cacheFiles.concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

const handler = workbox.precaching.createHandlerBoundToURL('/tallyHo/');
const navigationRoute = new workbox.routing.NavigationRoute(handler);
workbox.routing.registerRoute(navigationRoute);
