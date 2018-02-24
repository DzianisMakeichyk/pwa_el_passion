const CACHE_NAME = 'vivino-cache-v3';
const { assets } = global.serviceWorkerOption;

// cache our bundle assets
self.addEventListener('install', (event) => {
    // Add all cache
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(
                // Add pages for cache
                assets
            );
        })
    );
});

// remove old caches
self.addEventListener('activate', (event) => {

});

self.addEventListener('fetch', (event) => {

});
