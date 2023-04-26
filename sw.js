if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => {
        console.log('Service worker registered.', reg);
      })
      .catch((error) => {
        console.log('Service worker registration failed.', error);
      });
  });
}

const CACHE_NAME = 'my-cache';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/css/deneme.css',
  '/js/deneme.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});
const networkFirstStrategy = new workbox.strategies.NetworkFirst({
  cacheName: CACHE_NAME
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    networkFirstStrategy.handle(event)
      .catch(() => caches.match(event.request))
  );
});
