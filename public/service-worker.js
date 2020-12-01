const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";


const FILES_TO_CACHE = [
  '/',
  '/db.js',
  '/index.html',
  '/index.js',
  '/manifest.webmanifest',
  '/styles.css',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Adding event listener for self installation and cacheing files
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
// Activate service worker automatically when the installation is complete
  self.skipWaiting();
});

// Deleting old files in the cache on activation
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Handeling requests
self.addEventListener('fetch', function(event) {
  if (event.request.url.includes('api')) {
    console.log('[Service Worker] Fetch {data}', event.request.url);

      event.respondWith(
        caches.open(DATA_CACHE_NAME).then(cache => {
          return fetch(event.request)
            .then(response => {
              if (response.status === 200) {
                cache.put(event.request.url, response.clone());
              }

              return response;
            })
            .catch(err => {
              return cache.match(event.request);
            });
        })
      );
  
    return;
  } // br close for the event listener for the fetch function

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        return response || fetch(event.request);
      });
    })
  );
});