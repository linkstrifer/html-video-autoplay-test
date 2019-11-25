const videos = [...document.querySelectorAll("video[data-autoplay]")];

videos.forEach(playVideo);

function playVideo(video) {
  video.play();
}
