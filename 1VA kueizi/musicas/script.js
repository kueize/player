const songs = [
    {
        title: "Play Hard",
        artist: "David Guetta",
        src: "musicas/David Guetta - Play Hard ft. Ne-Yo, Akon (Official Video) - David Guetta.mp3",
        cover: "imagens/play hard.jpg"
    },
    {
        title: "I Can Only Imagine",
        artist: "David Guetta",
        src: "musicas/David Guetta - I Can Only Imagine ft. Chris Brown, Lil Wayne (Official Video) - David Guetta.mp3",
        cover: "imagens/David_Guetta_-_I_Can_Only_Imagine.jpg"
    },
    {
        title: "Who's That Chick",
        artist: "David Guetta",
        src: "musicas/David Guetta feat. Rihanna - Who's That Chick_ Official Video – (Day Video) - David Guetta.mp3",
        cover: "imagens/whos that chick.jpg"
    }
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playButton = document.getElementById('play');
const playIcon = playButton.querySelector('i');

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayIcon();
}

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    loadSong(songs[currentSongIndex]);
    audio.play();
    updatePlayIcon();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        audio.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
}

function updatePlayIcon() {
    if (audio.paused) {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    } else {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
}

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
playButton.addEventListener('click', togglePlayPause);

audio.addEventListener('ended', nextSong);

loadSong(songs[currentSongIndex]);
updatePlayIcon();