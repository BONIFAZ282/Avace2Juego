const audio = document.getElementById("myAudio");

audio.volume = 0.1;

audio.addEventListener("ended", function() {
  this.currentTime = 0;
  this.play();
});

audio.play();
