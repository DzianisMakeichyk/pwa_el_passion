const { assets } = global.serviceWorkerOption;

console.log(assets)

// cache our bundle assets
self.addEventListener('install', (event) => {
    // Add all cache
    let offlineRequest = new Request('../public/index.html');

    event.waitUntil(
        fetch(offlineRequest).then(function(response) {
            return cache.addAll(
                assets
            );
        })
    );
});

// remove old caches
self.addEventListener('activate', (event) => {

});

self.addEventListener('fetch', (event) => {
    let request = event.request;

    event.respondWith(
        fetch(request).catch(function(error)
        {console.error(
            '[onfetch] Failed. Serving cached offline fallback ' +
            error
        );
            return caches.open('offline').then(function(cache) {
                return cache.match('offline.html');
            });
        })
    );
});
