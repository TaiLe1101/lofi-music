const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPlay = $('.play');
const btnPause = $('.pause');
const audio = $('#audio');
const btnPrev = $('.prev');
const btnNext = $('.next');

// const songs = ['1', '2'];
const songs = [{ url: 1 }, { url: 2 }];
var songIndex = 0;

loadSong(songs[songIndex].url);

function loadSong(song) {
  audio.src = `./assets/sounds/${song}.mp3`;
}
const handlePlayMusic = () => {
  if (btnPlay.classList.contains('isPlay')) {
    btnPlay.classList.remove('isPlay');
    audio.play();
    btnPause.classList.add('isPlay');
  } else {
    btnPlay.classList.add('isPlay');
    audio.pause();
    btnPause.classList.remove('isPlay');
  }
};
const handleNextMusic = () => {
  songIndex = songIndex + 1;
  loadSong(songs[songIndex].url || songs[0].url);
  audio.play();
};
btnPlay.addEventListener('click', handlePlayMusic);
btnPause.addEventListener('click', handlePlayMusic);
btnNext.addEventListener('click', handleNextMusic);
