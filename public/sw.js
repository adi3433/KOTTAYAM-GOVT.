const CACHE_NAME = 'sveep-kottayam-v1';
const STATIC_CACHE = 'sveep-static-v1';
const DYNAMIC_CACHE = 'sveep-dynamic-v1';

// Static assets to cache
const STATIC_ASSETS = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/privacy-policy',
  '/sveep-logo.png',
  '/ec-logo.png',
  '/manifest.json',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('Caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') return;

  // Skip Firebase and external API requests
  if (
    url.hostname.includes('firebase') ||
    url.hostname.includes('googleapis') ||
    url.hostname.includes('firestore')
  ) {
    return;
  }

  // Network-first strategy for API/dynamic content
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clonedResponse = response.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, clonedResponse);
          });
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache-first strategy for static assets
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached response and update cache in background
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(request, networkResponse.clone());
              });
            }
          })
          .catch(() => {}); // Ignore network errors in background update
        return cachedResponse;
      }

      // Fetch from network and cache only successful responses
      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const clonedResponse = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, clonedResponse);
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Optionally return a fallback response here
          return new Response('Network error occurred', { status: 408 });
        });
    })
  );
});

// Background sync for offline pledges
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-pledges') {
    event.waitUntil(syncPledges());
  }
});

async function syncPledges() {
  // Implement offline pledge sync logic here
  console.log('Syncing offline pledges...');
}

// Push notification handler
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  
  const options = {
    body: data.body || 'New update from SVEEP Kottayam',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      url: data.url || '/',
    },
    actions: [
      {
        action: 'open',
        title: 'Open',
      },
      {
        action: 'close',
        title: 'Close',
      },
    ],
  };

  event.waitUntil(
    self.registration.showNotification(
      data.title || 'SVEEP Kottayam',
      options
    )
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});
