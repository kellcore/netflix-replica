//console.log("Hello world!");

var playText = document.getElementById('play-button-text');
var pauseText = document.getElementById('pause-button-text');
var playPause = document.getElementById('play-pause');
var wavesVideo = document.getElementById('waves-video');

//console.log(playText);
//console.log(pauseText);
//console.log(playPause);
//console.log(wavesVideo);

playPause.addEventListener("click", playControls);

function playControls() {
    if (wavesVideo.paused) {
        wavesVideo.play();
        playPause.innerHTML = `<i class="material-icons"> pause </i> Pause`;
    }
    else { 
        wavesVideo.pause();
        playPause.innerHTML = `<i class="material-icons"> play_arrow </i> Play`;
    } 
};