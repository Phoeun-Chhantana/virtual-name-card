'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "808bb1507eb83698a8e2341d5220f231",
"index.html": "7141da24fc04c321ef5caf2df000e60c",
"/": "7141da24fc04c321ef5caf2df000e60c",
"main.dart.js": "42ff18a489a26a3bbd3ccdf53290be60",
"favicon32.png": "6c4af1e251eb504aefbcab1811e223ce",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"logo.png": "e46987a7dfec5875db66bce0f82ee395",
"icons/android-chrome-192x192.png": "5024188e33dfc9a61a817d11153568e3",
"icons/apple-touch-icon.png": "fbbda8ace8438d505049ced5d08583e5",
"icons/android-chrome-512x512.png": "42d39334f2f9d267501bf38a0b1813cc",
"style.css": "ea7773c04dd03828602a583f76693a60",
"manifest.json": "83f1a0cbdf3dd8249df3bf8e157f2904",
"assets/AssetManifest.json": "b78f55e43ccf833d3578e4264ae54a0e",
"assets/NOTICES": "e013ae54b138ba7d5b1e6d43498fe4df",
"assets/FontManifest.json": "1f696caef1e40c0fdf01c796ecc303d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "045e402d8a1216b3ddac8ebff98b4316",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "3b797f04538cc7c16c14d0f005e1a347",
"assets/fonts/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/fonts/Poppins-ThinItalic.ttf": "4fc5673b837f1ba41825221a88fc7eb2",
"assets/fonts/Poppins-ExtraLightItalic.ttf": "4aa49ff8c7de4295787a4c7b318103e5",
"assets/fonts/Poppins-BoldItalic.ttf": "ad298ba8cf26d9c214d28d1eef16fb4c",
"assets/fonts/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/fonts/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/fonts/Poppins-SemiBoldItalic.ttf": "215bb268074bbf9212656b4a8d1fcc30",
"assets/fonts/IconFont.ttf": "c40088b0800366662383b907b3ea1ba3",
"assets/fonts/Poppins-ExtraBoldItalic.ttf": "cacbed9f986d5685947088fec7da20af",
"assets/fonts/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/fonts/Poppins-BlackItalic.ttf": "91aa7b4539f05576f6003d7da0d5fa1c",
"assets/fonts/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/fonts/Poppins-LightItalic.ttf": "b35333e8e8fbf4546626db4717c97c72",
"assets/fonts/MaterialIcons-Regular.otf": "8dec7756f390a06053ba0123686cb601",
"assets/fonts/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/fonts/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/fonts/Poppins-Thin.ttf": "010bf26d1f08aa72a7993f1e50bc0a66",
"assets/fonts/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/fonts/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"assets/fonts/Poppins-MediumItalic.ttf": "f34bf75e5fbde2ab10e87b35c5b115e2",
"assets/assets/pose02_male.png": "115318e1b2323626114096429de37e84",
"assets/assets/pose04_male.png": "d84e614397da6c140eec763ce4467b70",
"assets/assets/undraw_empty_re_opql.svg": "11c3bc007825b86b3bfc907785b0a9a1",
"assets/assets/chat_dot_rounded.svg": "2ae94580c1567ea8e757512d9f896bf7",
"assets/assets/logo.png": "3571d052e157e683d07cb7f724b62066",
"assets/assets/fb_square.svg": "5345bc8575c483b960c61acc64c7c68f",
"assets/assets/twitter_light.svg": "fae41781079c652134339d5a4ba78e01",
"assets/assets/download_box.svg": "c32693031e4986ce899470f7f374e3dc",
"logo.svg": "ea0f77e8cf9ed57a6744c4e11d8ce3a6",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
