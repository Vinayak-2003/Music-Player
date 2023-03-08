const music = document.querySelector("audio");          //querySelector() --> selects the first element which matches with the element name
const img = document.querySelector("img");
const play = document.getElementById("play");

let isPlaying = false;

const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play" , "fa-pause");
    img.classList.add("anime");
};

const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause" , "fa-play");
    img.classList.remove("anime");
};

play.addEventListener("click" , () => {
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
});

/*--------songs list------------*/ 
const songName = document.getElementById("songName");
const artist = document.getElementById("singer");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        songName : "Maan Meri Jaan",
        artist : "King",
    },
    {
        songName: "Malang Sajna",
        artist:"Sachet-Parampara",
    },
    {
        songName: "Manjha",
        artist: "Vishal Mishra",
    },
];

const loadSongs = (songs) => {
    songName.textContent = songs.songName;
    singer.textContent = songs.artist;
    music.src = "./songs/" + songs.songName + ".mp3";
    cover.src = "./images/" + songs.songName + ".png";
}


/*--------change songs------------*/ 
songIndex = 0;          
const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;         //2 = 3%3 == 0(repeat)
    loadSongs(songs[songIndex]);
    playMusic();
}

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

next.addEventListener('click' , nextSong);
prev.addEventListener('click' , prevSong);