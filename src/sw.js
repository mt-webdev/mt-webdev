CACHE_NAME = 'mtwd-cache-0.0.1';
var urlsToCache = [
    '/offline.html',
    '/assets/mtwd_svg_512.svg'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
