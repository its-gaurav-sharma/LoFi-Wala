console.log("Welcome to LoFi Wala");
//Initialize the variables
let songIndex = 0;
let AudioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals (feat. Laura Brehm)", filepath:"/songs/1.mp3", coverpath: "/covers/1.jpg"},
    {songName: "Huma-Huma - Cielo ", filepath:"/songs/2.mp3", coverpath: "/covers/2.jpg"},
    {songName: "Deaf Kev - Invincible", filepath:"/songs/3.mp3", coverpath: "/covers/3.jpg"},
    {songName: "Knight InBlue - New Day", filepath:"/songs/4.mp3", coverpath: "/covers/4.jpg"},
    {songName: "Janji - Heroes Tonight", filepath:"/songs/5.mp3", coverpath: "/covers/5.jpg"},
    {songName: "Janji - Heroes Tonight", filepath:"/songs/6.mp3", coverpath: "/covers/6.jpg"},
    {songName: "Bazzi - Paradise", filepath:"/songs/7.mp3", coverpath: "/covers/7.jpg"},
    {songName: "Warriyo - Mortals (feat. Laura Brehm)", filepath:"/songs/8.mp3", coverpath: "/covers/8.jpg"},
    {songName: "Janji - Heroes Tonight", filepath:"/songs/9.mp3", coverpath: "/covers/9.jpg"},
    {songName: "Different Heaven and Ehide - My Heart", filepath:"/songs/10.mp3", coverpath: "/covers/10.jpg"},
]
songItems.forEach((Element, i)=>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//audioElement.play();//

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        AudioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
AudioElement.addEventListener('timeupdate', ()=>{

    //Update Seekbar
    progress = parseInt((AudioElement.currentTime/AudioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    AudioElement.currentTime = myProgressBar.value * AudioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    })
})