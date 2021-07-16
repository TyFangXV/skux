if('serviceWorker' in navigator)
{
    navigator.serviceWorker.register("/sw.js")
    .then(res => console.log("sw registered"))
    .catch(err => console.log("sw failed to registed"))
}

console.log(typeof windows)