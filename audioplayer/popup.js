document.addEventListener('DOMContentLoaded', function () {
  const audioFileInput = document.getElementById('audio-file');
  const playPauseButton = document.getElementById('play-pause-button');
  const rewindButton = document.getElementById('rewind-button');

  let audioElement;
  let isPlaying = false;

  audioFileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);

    if (audioElement) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }

    audioElement = new Audio(url);
    isPlaying = false;
    playPauseButton.textContent = 'Play';
  });

  playPauseButton.addEventListener('click', function () {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
        playPauseButton.textContent = 'Play';
      } else {
        audioElement.play();
        playPauseButton.textContent = 'Pause';
      }
      isPlaying = !isPlaying;
    }
  });

  rewindButton.addEventListener('click', function () {
    if (audioElement) {
      audioElement.currentTime = 0;
    }
  });
});
