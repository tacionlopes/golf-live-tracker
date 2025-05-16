
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('golftracker-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/public/index.html',
        '/public/manifest.json',
        '/public/service-worker.js',
        '/src/main.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
