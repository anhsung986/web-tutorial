const CACHE_NAME = 'lap-trinh-web-v1';
const assetsToCache = [
  'index.html',
  'huongdan.html',
  'tags.html',
  'css-structures.html',
  'js.html',
  'color.html',
  'manifest.json'
];

// Cài đặt và lưu các file vào bộ nhớ cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Lấy dữ liệu từ cache khi ngoại tuyến
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
