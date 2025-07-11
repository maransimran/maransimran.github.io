const CACHE_NAME = 'radha-krishna-assistant-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://i.pinimg.com/originals/a1/35/a3/a135a34074213d2f9393a1027173775f.jpg',
  'https://i.pinimg.com/736x/f5/ec/8a/f5ec8a939446f2385c7f827988583416.jpg',
  'https://cdn.freesound.org/previews/219/219244_4032688-lq.mp3',
  'https://cdn.freesound.org/previews/187/187836_3432173-lq.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});