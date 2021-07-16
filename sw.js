const staticCacheName = 'skux-static'
const assets = [
    "/",
    "index.html",
    "/src/js/core/audio.js",
    "/src/js/core/metaData.js",
    "/src/js/core/song.js",
    "/src/js/preloader.js",
    "/src/css/styles.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
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
    console.log("sw has been activated")
})


//fetch req
self.addEventListener("fetch", evt => {
    console.log("data fetched")
})