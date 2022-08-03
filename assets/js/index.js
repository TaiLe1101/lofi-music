const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnPlay = $('.play');
const btnPause = $('.pause');
const audio = $('#audio');
const btnPrev = $('.prev');
const btnNext = $('.next');

const songs = ['1', '2'];
let songIndex = 0;

loadSong(songs[songIndex]);

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
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  audio.play();
};
const handlePrevMusic = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  audio.play();
};
btnPlay.addEventListener('click', handlePlayMusic);
btnPause.addEventListener('click', handlePlayMusic);
btnNext.addEventListener('click', handleNextMusic);
btnPrev.addEventListener('click', handlePrevMusic);
