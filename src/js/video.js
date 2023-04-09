let tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

$('.to-play').click(function (e) {
  e.preventDefault();

  let btn = $(this),
    videoID = btn.data('video'),
    playerID = btn.data('id');

  player = new YT.Player(playerID, {
    playerVars: {
      controls: 0,
      showinfo: 0,
      disablekb: 1,
      rel: 0,
      playsinline: 1,
    },
    videoId: videoID,
    events: {
      onReady: onPlayerReady,
    },
  });
});

function onPlayerReady(event) {
  let video = event.target.h;
  $(video).siblings('.to-play').addClass('removed');
  event.target.playVideo();
}
