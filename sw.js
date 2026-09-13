/* Subscription Hub — service worker
   Precaches the whole app shell so it runs fully offline.
   Bump CACHE version whenever you change any cached file. */
const CACHE = 'subhub-v2';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png',
  './fonts/poppins-latin-400-normal.woff2',
  './fonts/poppins-latin-500-normal.woff2',
  './fonts/poppins-latin-600-normal.woff2',
  './fonts/poppins-latin-700-normal.woff2',
  './fonts/roboto-latin-400-normal.woff2',
  './fonts/roboto-latin-500-normal.woff2',
  './fonts/roboto-latin-700-normal.woff2',
  './fonts/lato-latin-400-normal.woff2',
  './fonts/lato-latin-700-normal.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // App-shell navigations: serve cached index.html when offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).catch(() => caches.match('./index.html', { ignoreSearch: true }))
    );
    return;
  }
  // Everything else: cache-first, fall back to network and cache it.
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => hit);
    })
  );
});
