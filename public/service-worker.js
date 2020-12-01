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
self.addEventListener("install", function (evt) {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
// Activate service worker automatically when the installation is complete
  self.skipWaiting();
});

// Deleting old files in the cache on activation
self.addEventListener("activate", function(evt) {
  evt.waitUntil(
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
