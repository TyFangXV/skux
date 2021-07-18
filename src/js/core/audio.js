const audioControlContainer = document.getElementById("audio-control-btn-main");
const audioSlider = document.getElementById("slider");
const audioPlayer = document.getElementById("audio-player");
const playbtn = document.getElementById("audio-play-btn");
const pauseBtn = document.getElementById("audio-pause-btn")
const skipBtn = document.getElementById("audio-next-btn");
const prevBtn = document.getElementById("audio-back-btn");

let audioPlaying = false;

playbtn.addEventListener("click", ()=>{
    audioPlayer.play();
    playbtn.style.display = "none";
    pauseBtn.style.display = "block";
    audioPlaying = true;
    console.log(`audio playing ${audioPlaying}`)
})
    
    
pauseBtn.addEventListener("click", ()=>{
    audioPlayer.pause();
    pauseBtn.style.display = "none";
    playbtn.style.display = "block";
    audioPlaying = false;
    console.log(`audio playing ${audioPlaying}`)
})


console.log(JSON.parse(window.localStorage.getItem("files"))[0])

audioSlider.addEventListener("input", ()=>{
    audioPlayer.currentTime =  audioSlider.value
})


document.addEventListener("visibilitychange", function() {
    if(audioPlaying)
    {
        if(document.visibilityState === "hidden")
        {
            console.log(document.visibilityState)
            audioPlayer.play()
            console.log("bg playing")
        }
    }
});


audioPlayer.onpause = ()=>{
    pauseBtn.style.display = "none";
    playbtn.style.display = "block";
    audioPlaying = false;
}

audioPlayer.onplay = ()=>{
    playbtn.style.display = "none";
    pauseBtn.style.display = "block";
    audioPlaying = true;
}