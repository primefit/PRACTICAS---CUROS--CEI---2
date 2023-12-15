

document.addEventListener("DOMContentLoaded", function () {
    var audioPlayer = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");
    var stopButton = document.getElementById("stopButton");

    playButton.addEventListener("click", function () {
        audioPlayer.play();
    });

    stopButton.addEventListener("click", function () {
        audioPlayer.pause();
        audioPlayer.currenTime = 0;
        
    });
});

