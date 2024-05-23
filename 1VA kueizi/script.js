const songs = [
    {
        title: "Calendário",
        author: "ANAVITÓRIA ",
        source: "./musicas/Calendario.mp3",
        cover: "./imagens/calendario.jpeg"
    },
    {
        title: "Doi sem tanto",
        author: "ANAVITÓRIA ",
        source: "./musicas/Doi sem tanto.mp3",
        cover: "./imagens/doi sem tanto.jpeg"
    },
    {
        title: "Trevo",
        author: "ANAVITÓRIA",
        source: "./musicas/trevo.mp3",
        cover: "./imagens/trevo.jpg"
    },
  
];

let currentSongIndex = 0;
let audio = new Audio();
//const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const cover = document.getElementById('cover');
const title = document.getElementById('title');
const author = document.getElementById('author');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');

function loadSong(song) {
    audio.src = song.source;
    cover.src = song.cover;
    title.textContent = song.title;
    author.textContent = song.author;
    audio.load();
    audio.addEventListener('loadedmetadata', () => {
        durationElement.textContent = formatTime(audio.duration);
    });
}


function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeElement.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener('timeupdate', updateProgress);

function playPause() {
    if (audio.paused || audio.ended) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause fa-3x"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play fa-3x"></i>';
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

audio.addEventListener('ended', nextSong);

playPauseButton.addEventListener('click', playPause);
previousButton.addEventListener('click', previousSong);
nextButton.addEventListener('click', nextSong);

// Carregar a primeira música
loadSong(songs[currentSongIndex]);

function updateProgress() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
    currentTimeElement.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

audio.addEventListener('timeupdate', updateProgress);

function playPause() {
    if (audio.paused || audio.ended) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause fa-3x"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play fa-3x"></i>';
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playPause();
}

audio.addEventListener('ended', nextSong);

playPauseButton.addEventListener('click', playPause);
previousButton.addEventListener('click', previousSong);
nextButton.addEventListener('click', nextSong);

// Carregar a primeira música
loadSong(songs[currentSongIndex]);