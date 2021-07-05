const cacheName = 'wwf-jr-pwa';
const staticAssets = [
  './'
];

self.addEventListener('install', async event => {
	console.log('install event')
	const cache = await caches.open(cacheName); 
  	await cache.addAll(staticAssets); 
});
  
self.addEventListener('fetch', async event => {
	console.log('fetch event')
});