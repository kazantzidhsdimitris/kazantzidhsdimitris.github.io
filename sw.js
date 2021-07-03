self.addEventListener('install', function (event) {
    console.log('The service worker is being installed.');
    event.waitUntil(
        caches.open('Damian Lillard').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/favicon.ico',
                '/manifest.json',
                '/assets/facebook.svg',
                '/assets/github.svg',
                '/assets/linkedin.svg',
                '/assets/mail.svg',
                '/assets/calc512.png',
                '/assets/calc192.png',
                '/css/calcCSS.css',
                '/css/welcomepage.css',
                '/html/calculator.html',
                '/js/calcJS.js',
                '/js/common.js',
				'/js/LogIn.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('The service worker is serving the asset.');
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || caches.match('/index.html');
        })
    );
});