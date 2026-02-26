const songs = [
    {
        title: "Rap Metal",
        artist: "Kalliu",
        src: "../_musics/rapmetal.mp3",
        cover: "../_img/rap_metal.jpg"
    },
    {
        title: "Music 2",
        artist: "Kalliu",
        src: "../_musics/music2.mp3",
        cover: "../_img/album1.jpg"
    }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const title = document.getElementById("music-title");
const artist = document.getElementById("music-artist");
const cover = document.getElementById("cover");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");

let currentSong = 0;

// Carrega música
function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
}

loadSong(songs[currentSong]);

// Play / Pause
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    } else {
        audio.pause();
        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
});

// Próxima
nextBtn.addEventListener("click", () => {
    currentSong++;
    if (currentSong >= songs.length) currentSong = 0;
    loadSong(songs[currentSong]);
    audio.play();
});

// Anterior
prevBtn.addEventListener("click", () => {
    currentSong--;
    if (currentSong < 0) currentSong = songs.length - 1;
    loadSong(songs[currentSong]);
    audio.play();
});

// Atualiza barra
audio.addEventListener("timeupdate", () => {
    const { currentTime, duration } = audio;
    progress.value = (currentTime / duration) * 100;

    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
});

// Mudar tempo manualmente
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

// Formata tempo
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}