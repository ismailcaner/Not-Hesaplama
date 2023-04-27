// Servis işçisi dosyası
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/images/logo.png'
];

// Önbelleğe alma işlemini gerçekleştirir
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Önbellek açıldı');
        return cache.addAll(urlsToCache);
      })
  );
});

// Önbelleğe isteği yanıtlar
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          console.log('İstek önbellekten alındı: ', event.request.url);
          return response;
        }

        console.log('Ağdan istek yapıldı: ', event.request.url);
        return fetch(event.request);
      })
  );
});

// Eski önbellekleri temizler
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          console.log('Eski önbellek temizlendi: ', cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});
