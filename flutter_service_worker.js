'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "663e71cf55c5a94ae054e8854099fd38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2ea25dc57c3b3077e98323af6c30a86d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d1ca530095a065188147c9e9042e85a",
".git/logs/refs/heads/master": "8d217194b690b596075a5ff127f155bb",
".git/logs/refs/remotes/origin/master": "bed2a5d07059e7a29da00dd4d86df02a",
".git/objects/0b/4e39eea4285eb820bd991b63c3ebdd9ad7eee1": "7356c1821aa77861cc5c0268d6ccf8d9",
".git/objects/0f/08e6ae3ba6df82f490df8bd6517bc2c1b55bc7": "f7e5eec338ecbafeca5b22146c8cf8bc",
".git/objects/58/76e76429c0820624a2445c415c009ffc4e30d1": "4ad534b6a0bac1f37cd382e64e8408f6",
".git/objects/5d/6a027d4d99b42d110d894155e4fac5ad4df737": "068f00b2259e716863f22ab708025813",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9e/ae993fc08daa584b6d089763182bd3bb59678d": "3fc793e8a095071181097e225a8fe7b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/1c68db47cd5a21127040f02e0815609737b786": "4cf0d414cc64681ab14ba8c23c1580dc",
".git/objects/bd/856f65db90a600cf6bc79e5193b82d5f34f61e": "caca6aa9e0e12ee3b300966423016157",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/master": "774a43d64514eccd67901aaf64f46d56",
".git/refs/remotes/origin/master": "774a43d64514eccd67901aaf64f46d56",
"assets/AssetManifest.bin": "80f19febfb699dad6220ff2f74bedae2",
"assets/AssetManifest.bin.json": "1f09f29c35465e80e7f6dd6e1e052de2",
"assets/AssetManifest.json": "bf93676731cd197a934fdc923797c2d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a0d1979fe275c6227c4b6119a0fa17df",
"assets/images/all/jacket.png": "c66e21d5e57f54300da35f98716f3366",
"assets/images/all/miband.jpg": "0ecdd40739cebec24a653edd1de2f67c",
"assets/images/all/sweet.png": "57f911e582e324e3051fa9480246aaf6",
"assets/images/all/wireless.png": "3afc4d6125e07ef9b604224294213b8d",
"assets/images/all.png": "cc783fe9c0ebdf04c8f69206aa1ba54d",
"assets/images/ao-so-mi-5.jpg": "b3ceca27d757a6bc84b50f170f82e2b2",
"assets/images/beauty/face%2520care.png": "cba1a9fb6bc058345e3aa52ed7d04e69",
"assets/images/beauty/perfume.png": "863a26cb6013bafa5233e8f4f4fbab0d",
"assets/images/beauty.png": "2478ef550e13c9e155c961e5d57cbd90",
"assets/images/icon.png": "9612cbb7690ac422115cdceb8446bcdb",
"assets/images/image1.png": "fb7aac6adc9cdfadb1e4de1fc129236f",
"assets/images/jewelry/earrings.png": "fe701c0bca35017003268ff0548bc957",
"assets/images/jewelry/jewelry-box.png": "3d203fa303294be7f6a82b0366338af1",
"assets/images/jewelry/necklace-jewellery.png": "48f664dfdb62bf4be010f64f1be4682e",
"assets/images/jewelry/wedding%2520ring.png": "cc3dedfd637c0f18ec6e6cc22a349c59",
"assets/images/jewelry.png": "03074683376a47d423a24dfc18852f1a",
"assets/images/logo_vintage.png": "a54fb40077e2de3a24be2c45ef6e9021",
"assets/images/men%2520fashion/man%2520jacket.png": "193ad1ae0f50ef0690e26d5fe7585bc5",
"assets/images/men%2520fashion/pants.png": "5c8d035d74efe8d84b47d84cbf44a7e9",
"assets/images/men%2520fashion/shert.png": "74a198278ad775827fde3fe90baef384",
"assets/images/men%2520fashion/t-shirt.png": "a27211dd65203967f0389d0eb726ec62",
"assets/images/men%2520fashion/watch.png": "2c7dab3bc8ef12a27098bfdfae39f505",
"assets/images/men.png": "1e894d1cd604767b98bba0e35c243ff1",
"assets/images/profile3.png": "f50cff92f29993c12e733ea4912b4f42",
"assets/images/quan-jean-6.jpg": "21d43cbcf13763870ea12c86e597a5b1",
"assets/images/shoes/Air%2520Jordan.png": "73115a6ab55eb172920ee0c9b517caeb",
"assets/images/shoes/New%2520Balance%2520990.png": "0858945f084f1fc17e4caef6fffa005d",
"assets/images/shoes/sports%2520shoes.png": "c3bfae1916d7676a2599c61aa57a7684",
"assets/images/shoes/vans%2520old%2520skool.png": "75abc193f894c0b8f1df8d5b8c08b49f",
"assets/images/shoes/white%2520sneaker.png": "b239f0ccdc41b26d1614157d46fe880a",
"assets/images/shoes/women-shoes.png": "bb444ab42c5720334927f760fa4dbfa6",
"assets/images/shoes.png": "c4b3d0079a5dc3a1f7a2d59413adfaac",
"assets/images/slider.jpg": "f8e64812ba0f3f3e163b990cd437be00",
"assets/images/slider3.png": "d3ffb2a947d89525f812f27e3677e4dd",
"assets/images/vay-5.jpg": "d9349be92a70c65cbda6b6733c277f87",
"assets/images/women%2520fashion/kurta.png": "1183d760790163550b763baa93ba2538",
"assets/images/women%2520fashion/lehenga.png": "f3862d2804e209ec1394a87910690b9b",
"assets/images/women%2520fashion/pants.png": "be05886bec932d344b624abbb00cbac0",
"assets/images/women%2520fashion/t-shert.png": "467cd6cfe7206fd60f6d9effb1922c96",
"assets/NOTICES": "d46283b1facdcf96e08a1cf3b521044c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6355cd5ba7dd0ceaf337232633d129f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "275aa028578d90431ba85dfefa7497ac",
"/": "275aa028578d90431ba85dfefa7497ac",
"main.dart.js": "d9fc29768fe3149cf85eff5869e7155e",
"manifest.json": "e3634358ab2caa29b772fa69679d99ae",
"README.md": "b4f56622db7aee8d623db8661acc9029",
"version.json": "8d2bb6a2a4638c9cca8cdac1c110b24b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
