const body = document.getElementById('root')
const player = document.getElementById('player')
const play = document.getElementById('play')
const playIcon = document.getElementById('play-img')
const nextIcon = document.getElementById('next-img')
const prevIcon = document.getElementById('prev-img')
const next = document.getElementById('next')
const prev =document.getElementById('prev')
const audio = document.getElementById('file')
const title = document.getElementById('music-title')
const thumbnail = document.getElementById('thumbnail')
const repeatBtn = document.getElementById('repeat')
const shuffleBtn = document.getElementById('shuffle')
const repeatIcon = document.getElementById('repeat-icon')
const shuffleIcon = document.getElementById('shuffle-icon')
let shuffleParam = 0;
let newTitle;
let isStarted = false
const repeatParam = ['All', 'One', 'Off']
let count=0;
let repCount = 0;
const musicList = [
'Marvel-Amber-Rose-(JustNaija.com).mp3',
'01-Oge Nweke-Jesus Best Connection.mp3',
'13 Awesome God.mp3',
'be magnified.mp3',
'bro onyedikachi umeh divine gift (2).mp3',
'Because He lives.mp3',
'Because_Of_Who_You_A.mp3',
'G~Lord I lift ur name.mp3',
'G~Don moen@God will make a way.mp3',
'Conrnelius Benjamin-Abu Nmeri vol 2-A.mp3',
'DEPENDABLE FATHER1.mp3',
'DJ Enyeama jesus2.mp3',
'don meon--he never sleep.mp3',
'Don Moen 2.mp3',
'Don moen_ancient of days.mp3',
'G~Don  Moen-Blessed be the name of the lord.mp3',
'don moen=i offer my life.mp3',
'Evang uche ume -01.mp3',
'Evang uche ume 2.mp3',
'Flavour - Iwe (Tribute To MC Loph).mp3',
'frank eddword mama.mp3',
'Frank Edward _ what a mighty God.mp3',
'Frank Edward - Chukwu Okike.mp3',
'Frank Edwards - Chukwu Ebuka.mp3',
'Frank Edwards - Lifted.mp3',
'Frank Edwards - Ogene dò.mp3',
'frank edwards- on eagles\'s .mp3',
'FRANK EDWARDS. Miracle God..mp3',
'G~ Give Thanks.mp3',
'G~ Have Thine own Way, Lord.mp3',
'G~R.Kelly-U Save me.mp3',
'GOZIE OKEKE=UTUTU OMA CHINEKE --A.mp3',
'jesus  ealier  d  better.mp3',
'live for jesus.mp3',
'MICH C . PHILIP THY WILL BE DONE.mp3',
'MICH C-NGOZI CHUKWU.mp3',
'MICH C-NGOZI CHUKWU4.mp3',
'Ngozi chugu (1).mp3',
'ngozi chukwu 2.mp3',
'NGOZI CHUKWU VOL 3_03.mp3',
'NGOZY CHUKWU - Track01.mp3',
'pastor davidi~1.mp3',
'PAUL NWOKE OHCA-EKELE SI IIGWE.mp3',
'PAUL NWOKEOCHA MY HELP.mp3',
'PAUL NWOKEOCHA-ANYONE-LIKE YOU.mp3',
'paul nwokocha new-anyone like you.mp3',
'PRINCESS NJIDEKA O. = NKE PENTECORS.mp3',
'SINACH = AWESOME GOD..mp3',
'SINACH = MORE OF YOU..mp3',
'Stormrex-Kerenke.mp3',
'the time is now.mp3',
'this year is my year.mp3',
'Track01 (.mp3',
'Track05.mp3',
'Track07 (1).mp3',
'Track06 (1).mp3',
'ArrDee_-_Come_&_Go_(Official_Music_Video)(128k).m4a',
]

// Handle event listeners funcs

play.addEventListener('click', start)
next.addEventListener('click', nextUp)
prev.addEventListener('click', past)
repeatBtn.addEventListener("click", repeat)
shuffleBtn.addEventListener("click", shuffle)

// define start func for music play
function load(){
    audio.setAttribute('src','../'+musicList[count])
    newTitle = musicList[count].split('').slice(0,-4).join('')
    title.innerText = newTitle
    playIcon.setAttribute('src', './assets/play-svgrepo-com.svg')
    thumbnail.setAttribute('src', './assets/simon-noh-0rmby-3OTeI-unsplash.jpg')
    thumbnail.style.display= 'block'
    body.style.background = `url(./assets/simon-noh-0rmby-3OTeI-unsplash.jpg) no-repeat`
    body.style.backgroundSize = 'cover'
}
load()

function start(){
    isStarted = !isStarted
    if(isStarted){
        audio.play()
        playIcon.setAttribute('src', './assets/pause-svgrepo-com.svg')
        setInterval(()=>{
            if(audio.ended){
                nextUp()
        }
    }, 100)
    }else if(!isStarted){
        audio.pause()
        playIcon.setAttribute('src', './assets/play-svgrepo-com.svg')
    }
}
// define function for getting Next and Prev
const playing = []
let playingNum
function nextUp(){
    // algorithm for keeping music count
    if(shuffleParam == 0){
        playingNum = Math.round(Math.random()*55)
        playing.push(playingNum)
        audio.setAttribute('src', `../${musicList[playing[playing.length-1]]}`)
        count = musicList.indexOf(musicList[playing[playing.length-1]])
        newTitle = musicList[playing[playing.length-1]].split('').slice(0,-4).join('')
    }else{
        if(count >= musicList.length-1){
            count= 0;
        }else{
            count++
        }
        audio.setAttribute('src', `../${musicList[count]}`)
        newTitle = musicList[count].split('').slice(0,-4).join('')
    }
    playIcon.setAttribute('src', './assets/pause-svgrepo-com.svg')
    title.innerText = newTitle
    title.style.color=`rgb(${Math.round(Math.random()*256)},20,${Math.round(Math.random()*256)})`
    thumbnail.setAttribute('src', '../Folder.jpg')
    thumbnail.style.display= 'block'
    audio.play()
}

function past(){
    // algorithm for keeping music count
    if(shuffleParam == 0){
        playingNum = Math.round(Math.random()*55)
        playing.push(playingNum)
        audio.setAttribute('src', `../${musicList[playing[playing.length-1]]}`)
        count = musicList.indexOf(musicList[playing[playing.length-1]])
        newTitle = musicList[playing[playing.length-1]].split('').slice(0,-4).join('')
    }else{
        if(count <= 0){
            count= musicList.length-1;
        }else{
            count--
        }
        audio.setAttribute('src', `../${musicList[count]}`)
        newTitle = musicList[count].split('').slice(0,-4).join('')
    }
    playIcon.setAttribute('src', './assets/pause-svgrepo-com.svg')
    audio.setAttribute('src', `../${musicList[count]}`)
    newTitle = musicList[count].split('').slice(0,-4).join('')
    title.innerText = newTitle
    title.style.color=`rgb(${Math.round(Math.random()*256)},20,${Math.round(Math.random()*256)})`
    audio.play()
}
// setInterval(()=>{
//     nextUp()
// },100000)

// Playlist
//  Repeat func.

let timer = ()=>{
    if(count == musicList.length-1){
        if(audio.ended){
            nextUp()
        }
    }
}

function repeat(){
    if(repCount >= 2){
        repCount=0;
    }else{
        repCount++
    }
    if(repeatParam[repCount].toLowerCase()=='one'){
        audio.loop = true
        repeatIcon.setAttribute('src', './assets/repeat-once-thin-svgrepo-com.svg')
    }else if(repeatParam[repCount].toLowerCase() == 'all'){
        repeatIcon.setAttribute('src', './assets/repeat-svgrepo-com.svg')
        audio.loop = false
        setInterval(timer, 100)
    }else if(repeatParam[repCount].toLowerCase() == 'off'){
        audio.loop = false
        clearInterval(timer)
    }
}
repeat()
repCount = 0
repeatIcon.setAttribute('src', './assets/repeat-svgrepo-com.svg')
shuffleIcon.setAttribute('src', './assets/shuffle-svgrepo-com.svg')
// function repeatOne(){
//     audio.loop()
// }


function shuffle(){
    if(shuffleParam == 0){
        shuffleIcon.setAttribute('src', './assets/shuffle-svgrepo-com.svg')
        shuffleParam = 1
    }else{
        shuffleIcon.setAttribute('src', './assets/repeat-svgrepo-com.svg')
        shuffleParam = 0
    }
}