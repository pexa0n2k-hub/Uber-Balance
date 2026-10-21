const CACHE='uber-balance-navstyles-v1';
const ASSETS=['./','./index.html','./app.js?v=navstylesv1','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('uber-balance-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 if(u.pathname.endsWith('/app.js')||u.pathname.endsWith('/sw.js')||u.pathname.endsWith('/index.html')){
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html'))));
  return;
 }
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r}).catch(()=>caches.match('./index.html'))));
});