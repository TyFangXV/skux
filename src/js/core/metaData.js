const SongName = document.getElementById("song-name");
const audio_Player = document.getElementById("audio-player");
const audio_start = document.getElementById("audio-start");
const audio_end = document.getElementById("audio-end");
const audio_Slider = document.getElementById("slider");
let song_over;

if(audio_Player.src !== window.location.href)
{
    //decode the url into readable text then take the last element of array after splitting it to get file name
    let currentFile = decodeURIComponent(audio_Player.src).split("/").pop();

    //remove the ".mp3" in the file name to get the song name
    let song_Name = currentFile.replace(".mp3", "");

    SongName.innerHTML = song_Name;

    const readableDuration = (seconds)=>{
        sec = Math.floor( seconds );    
        min = Math.floor( sec / 60);
        min = min >= 10 ? min : '0' + min;    
        sec = Math.floor( sec % 60 + 1);
        sec = sec >= 10 ? sec : '0' + sec;    
        return min + ':' + sec;
    }



audio_Player.onloadedmetadata = ()=>{
        //set the audio end time as the durarion of the audio 
        audio_end.innerHTML = readableDuration(audio_Player.duration);

        setInterval(async() => {
            //if the current duration of the audio player isn't equal to the audio duration then it would keep updating start time
            if(Math.floor(audio_Player.currentTime) !== Math.floor(audio_Player.duration))
              {
                audio_start.innerHTML = readableDuration(audio_Player.currentTime);
                audio_Slider.max = Math.floor(audio_Player.duration + 1);
                audio_Slider.value = Math.floor(audio_Player.currentTime + 1)
              }else{
                audio_Player.pause()  
              }
         }, 1000);
    }   

    //custom Media playback notifications
    if('mediaSession' in navigator)
     {
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song_Name,
              artist: 'Unknown',
              artwork: [
                  { src: './src/icon/manifest-icon-512.png',   sizes: '512',   type: 'image/png' },
              ]

            });


            navigator.mediaSession.setActionHandler('play', ()=>{
                audio_Player.play();
            });
            navigator.mediaSession.setActionHandler('pause', ()=>{
                audio_Player.pause()
            });
            navigator.mediaSession.setActionHandler('seekbackward', ()=>{
                audio_Player.currentTime = Math.floor(audio_Player.currentTime) - 10 + 1;

            });
            navigator.mediaSession.setActionHandler('seekforward', ()=>{
                audio_Player.currentTime = Math.floor(audio_Player.currentTime) + 10 + 1;
            });
     }
}
