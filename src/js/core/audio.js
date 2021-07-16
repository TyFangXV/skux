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
})
    
    
pauseBtn.addEventListener("click", ()=>{
    audioPlayer.pause();
    pauseBtn.style.display = "none";
    playbtn.style.display = "block";
    audioPlaying = false;
})




audioSlider.addEventListener("input", ()=>{
    audioPlayer.currentTime =  audioSlider.value
})


document.addEventListener("visibilitychange", function() {
 if(document.visibilityState !== "visible")
   {
       if(audioPlaying)
         {
             audioPlayer.play()
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