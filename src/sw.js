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
    // Delete cache (When refresh browser or close browser tab)
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delere(key))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {

});
