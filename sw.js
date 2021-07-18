const staticCacheName = 'skux-static-v:0.1';

const assets = [
    "/",
    "index.html",
    "/src/js/core/audio.js",
    "/src/js/core/metaData.js",
    "/src/js/core/song.js",
    "/src/js/preloader.js",
    "/src/css/styles.css",
    "https://fonts.googleapis.com/css2?family=Rokkitt&display=swap",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v92/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
    "/src/image/image-alt.png",
    "/src/image/music-alt-icon.png",
    "/src/icon/apple-icon-180.png",
]
//installing app
self.addEventListener("install", async(evt) => {
    try {
        let cache = await caches.open(staticCacheName);
        await cache.addAll(assets)
    } catch (error) {
        console.log(error.message)
    }

})


//listen for activate 
self.addEventListener("activate", evt=>{
    evt.waitUntil(
        caches.keys()
          .then(key => {
              return Promise.all(key.filter(key => key !== staticCacheName).map(key => caches.delete(key)))
          })
    )
})


//fetch req
self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches.match(evt.request) 
              .then(res => {
              return res || fetch(evt.request)
         })
    )
  }
)