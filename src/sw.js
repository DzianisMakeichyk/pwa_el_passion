const CACHE_NAME = 'vivino-cache-v3';
const URLS_TO_IGNORE = ['chrome-extension', 'sockjs-node', '/wines'];
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

    self.skipWaiting();
});

// remove old caches
self.addEventListener('activate', (event) => {
    // Delete cache (When refresh browser or close browser tab)
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then(function(response) {
            // If everything ok
            if (response) {
                return response;
            }

            // If something new or edited (for SPA)
            if (!navigator.isOnline && isHtmlRequest(event.request)) {
                // index.html (but it SPA)
                return cache.match(new Request('/index.html'));
            }

            if (shouldIgnoreRequest(event.request)) {
                return fetch(event.request);
            }

            return fetchAndUpdate(event.request);
        });
    }));
});

function shouldIgnoreRequest(request) {
    // What files will ignors
    return URLS_TO_IGNORE
        .map((urlPart) => request.url.includes(urlPart))
        .indexOf(true) > -1;
}

function isHtmlRequest(request) {
    return request.headers.get('accept').includes('text/html');
}

function fetchCors(request) {
    return fetch(new Request(request), { mode: 'cors', credentials: 'same-origin' });
}

function fetchAndUpdate(request) {
    // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
    // There's probaly more going on here, but I'd rather just ignore this problem. :)
    // https://github.com/paulirish/caltrainschedule.io/issues/49
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return;

    return caches.open(CACHE_NAME).then((cache) => {
        // Created 'new' cache
        return fetchCors(request).then((response) => {
            // foreign requests may be res.type === 'opaque' and missing a url
            if (!response.url) return response;

            cache.put(request, response.clone());
            return response;
        });
    });
}
