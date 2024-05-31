let imgArray = [
    'imgs/1.png',
    'imgs/2.png',
    'imgs/3.png',
    'imgs/4.png',
    'imgs/5.png',
    'imgs/6.png',
    'imgs/7.png',
    'imgs/8.png',
    'imgs/9.png',
    'imgs/10.png',
    'imgs/11.png',
    'imgs/12.png',
    'imgs/13.png',
    'imgs/14.png',
    'imgs/15.png',
    'imgs/16.png'
]

var Engine = Matter.Engine,
Render = Matter.Render,
Runner = Matter.Runner,
Composites = Matter.Composites,
Common = Matter.Common,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Composite = Matter.Composite,
Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
world = engine.world;

// now creating gravity 
// engine.gravity.y = 1;

// create renderer
var render = Render.create({
    element: document.getElementById('canvas'),
    engine: engine,
    options: {
        background: "none",
        width: 330,
        height: 600,
        wireframes: false,
    }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// now creating shapes to animate
for (let i = 0; i < imgArray.length; i++) {
    var createCircle = Bodies.circle(400, -200 + i * 20, 50, {
        render: {
            sprite: {
                texture: imgArray[i],
                xScale: 0.6, // scaling the width
                yScale: 0.6  // scaling the height
            }
        }
    });
    Composite.add(world, createCircle); // Add each circle to the world
}

// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

    
// add invisible walls and mouse control to the world
Composite.add(world, [
    Bodies.rectangle(400, -380, 1000, 10, { 
        isStatic: true,
        render: { visible: false } // this is for top wall
    }), 
    Bodies.rectangle(400, 1020, 1000, 10, { 
        isStatic: true,
        render: { visible: false } // this is for bottom wall
    }), 
    Bodies.rectangle(790, 300, 1, 1400, { 
        isStatic: true,
        render: { visible: false } // this is for right wall
    }), 
    Bodies.rectangle(10, 300, 1, 1400, { 
        isStatic: true,
        render: { visible: false } // this is for left wall
    }), 
    mouseConstraint
]);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
});


// js code for open the wishing Card
let buttonOpenPopup = document.querySelector('.button-open-toggle');
let frontPage = document.querySelector('.frontpage-wishing');

buttonOpenPopup.addEventListener('click',()=>{
    buttonOpenPopup.classList.toggle('active');
    playMusic.click();
    setTimeout(()=>{
        frontPage.classList.add('active');
    },1000);
})

// js code for next and previous buttons for gallery interactions
let quoteArray = [
        "Manu, your kindness, laughter, and support are just a few reasons I love you 🎂🎉😘💕. On your special day, I'm deeply grateful for your love 🎂🎁🎈 and companionship. ❤❤❤",
        "Happy Birthday, Manu! 🎈🥳 Your sweetness 🍯, laughter 😄, and love 💖 make my life so special. Every day with you is a blessing 🌸. Celebrating you today and always! 🎂🎉😘💕",
        "Happy Birthday, Manu! 🎉🌹 Your sparkle ✨, joy 😊, and love 💞 brighten my life. You make every moment magical 🦄. Today is all about celebrating you! 🎂🎁🎈 Love you tons! 😘💕🌟",
        "Happy Birthday, Manu! 🌟 Your love, laughter, and warmth fill my heart with joy. Every day with you is a gift. Today, I celebrate you and all the happiness you bring into my life. Love you endlessly! ❤❤❤",

]
let quoteIndex = 1;
let cuteGallerySmallText = document.querySelector('.cute-gallery small');

window.addEventListener('load',()=>{
    getValues(quoteIndex);
})

function getValues(target)
{
    cuteGallerySmallText.innerText = quoteArray[target - 1];
}

let getShutterAudio = document.querySelector('.Shutter-audio');
function Next()
{
    let galleryImages = document.querySelectorAll('.cute-gallery-images');
    document.querySelector('.cute-gallery-images-container').appendChild(galleryImages[0]);

    quoteIndex++;
    if(quoteIndex > quoteArray.length)
        {
            quoteIndex = 1;
            quoteIndex = quoteIndex;
        }
        getValues(quoteIndex);
        if(getShutterAudio.paused)
            {
                getShutterAudio.play();
            }
    
}

function Previous()
{
    let galleryImages = document.querySelectorAll('.cute-gallery-images');
    document.querySelector('.cute-gallery-images-container').prepend(galleryImages[galleryImages.length - 1]);
    quoteIndex--;
    if(quoteIndex < 1)
        {
            quoteIndex = quoteArray.length;
            quoteIndex = quoteIndex;
        }
        getValues(quoteIndex);
        if(getShutterAudio.paused)
            {
                getShutterAudio.play();
            }
}


// js code for open the cute apps page Two 

window.addEventListener('load',()=>{
    displayNotes();
})
let nxtPage = document.querySelector('.go-to-next-page');
let cuteApps = document.querySelector('.cute-apps');

nxtPage.addEventListener('click',()=>{
    cuteApps.classList.add('active');
})


// js code for open the input notes popup 
let addBtn = document.querySelector('.add-btn');
let addNotesPopup = document.querySelector('.add-notes-box');
addBtn.addEventListener('click',()=>{
    addNotesPopup.classList.add('active');
})

let cutNotesPopup = document.querySelector('.cut-popup');
cutNotesPopup.addEventListener('click',()=>{
    addNotesPopup.classList.remove('active');
})

// js code for creating notes for notes application
let notesTitle = document.querySelector('.inputField');
let notesDescription = document.querySelector('.inputTextArea');
let submitNote = document.querySelector('.add-note-btn');
let cuteNotesBox = document.querySelector('.cute-notes-box');
let NotesGet = JSON.parse(localStorage.getItem('notesIndex') || '[]');


function displayNotes()
{
    document.querySelectorAll(".notes").forEach((removeNotes)=>removeNotes.remove());
    NotesGet.forEach((targetNotes,index)=>{
        let getNotes = 
                        ` <div class="notes">
                            <h3>${targetNotes.TITLE}</h3>
                            <p>${targetNotes.DESCRIPTION}</p>
                            <div class="delete-note" onclick = "deleteBtn(${index})"></div>
                         </div>
                        `
            cuteNotesBox.insertAdjacentHTML('beforeend',getNotes);
    })
}

submitNote.addEventListener('click',()=>{
    let storeTitle = notesTitle.value.trim();
    let storeDescription = notesDescription.value.trim();
    
    if(!notesTitle.value || !notesDescription.value)
        {
            alert('Please enter your notes to continue...');
        }
        else
        {
            
            let createNotesObject = {
                TITLE : storeTitle,
                DESCRIPTION : storeDescription,
            }

            NotesGet.push(createNotesObject);
            localStorage.setItem('notesIndex',JSON.stringify(NotesGet));
            displayNotes();
            cutNotesPopup.click();
        }
        notesTitle.value = "";
        notesDescription.value = "";
        
})



function deleteBtn(targetID)
{
    let confirmDeleteNote = confirm("Are you sure you want to delete this note ?");
    if(!confirmDeleteNote)
        {
            return;
        }
    NotesGet.splice(targetID , 1);
    localStorage.setItem('notesIndex', JSON.stringify(NotesGet));
    displayNotes();
}

// js code for open the cute notes page Three
let nxtPageTwo = document.querySelector('.nextPageThree');
let cuteNotes = document.querySelector('.cute-notes');

nxtPageTwo.addEventListener('click',()=>{
    cuteNotes.classList.add('active');
})


// js code for swiper songs lists
function swiperSongs()
{
    var swiper = new Swiper(".mini-music-player-playlists-swiper", {
        slidesPerView: 3,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
if(swiperSongs())
    {
        swiperSongs();
    }


// js code for mini music player 

let musicArray = [

    {
        song : "2",
        songName : "Hold Me In Your Arms",
        ArtistName : "keyloud",
        img: "manu-9",
    },
    {
        song : "1",
        songName : "Falak Tak",
        ArtistName : "Udit Narayan",
        img: "manu",
    },
    {
        song : "3",
        songName : "Hold Up",
        ArtistName : "Carston",
        img: "manu-2",
    },
    {
        song : "4",
        songName : "Hum Toh Deewane",
        ArtistName : "Elvish Yadav",
        img: "gal-3",
    },
    {
        song : "5",
        songName : "Jaadui (Song)",
        ArtistName : "Jubin Nautiyal",
        img: "gal-4",
    },
    {
        song : "6",
        songName : "Gulaab",
        ArtistName : "MITRAZ",
        img: "manu-7",
    },
    {
        song : "7",
        songName : "O Maahi",
        ArtistName : "Arijit Singh",
        img: "manu-4",
    },
    {
        song : "8",
        songName : "Forget About You",
        ArtistName : "Rammor",
        img: "gal-2",
    },
    {
        song : "9",
        songName : "Ve Haaniyaan",
        ArtistName : "Dreamiyata Music",
        img: "manu-6",
    },
    {
        song : "10",
        songName : "Pal Behta Jaaye",
        ArtistName : "Vismay Patel",
        img: "manu-8",
    },
    {
        song : "11",
        songName : "Yimmy Yimmy - Tayc _ Shreya Ghoshal",
        ArtistName : "Tayc _ Shreya Ghoshal",
        img: "gal-1",
    },
    
]
window.addEventListener('load',()=>{
    musicLists(musicIndex);
    createDynamicMusicSwiper();
    addClasstoMusic(musicIndex);
})
let musicIndex = 1;

function musicLists(targetIndex)
{
    musicSRC.src = `songs/${musicArray[targetIndex - 1].song}.mp3`;
    console.log(musicSRC);
    
}

let playMusic = document.querySelector('.play-music-image');
let musicSRC = document.querySelector('.musicSRC');
let musicBar = document.querySelector('.bars');
let musicBarPercentage = document.querySelector('.bars-percentage');
let addSongsListWrapper = document.querySelector('.swiper-wrapper.mini-music-player-wrapper');

playMusic.addEventListener('click',()=>{
    playMedia();
    
})

function playMedia()
{
    if(musicSRC.paused)
        {
            musicSRC.play();
            playMusic.src = 'imgs/pause.png';
            document.querySelector('.player .equalizer-img').style.visibility = "visible";
        }
        else
        {
            musicSRC.pause();
            playMusic.src = 'imgs/play.png';
            document.querySelector('.player .equalizer-img').style.visibility = "hidden";
        }
}

function nextSong()
{
    musicIndex++;
    if(musicIndex > musicArray.length)
        {
            musicIndex = 1;
            musicIndex = musicIndex;
        }
        musicLists(musicIndex);
        playMusic.click();
        addClasstoMusic(musicIndex);

}

function previousSong()
{
    musicIndex--;
    if(musicIndex < 1)
        {
            musicIndex = musicArray.length;
            musicIndex = musicIndex;
        }

        musicLists(musicIndex);
        playMusic.click();
        addClasstoMusic(musicIndex);

}

musicSRC.addEventListener('timeupdate',(e)=>{
    let currentTime = e.target.currentTime;
    let currentDuration = e.target.duration;
    let progressBarWidth = (currentTime / currentDuration) * 100;

    musicBarPercentage.style.width = `${progressBarWidth}%`;
})

musicBar.addEventListener('click',(e)=>{
    let musicBarWidth = musicBar.offsetWidth;
    let musicBarOffset = e.offsetX;
    let songDuration = musicSRC.duration;

    musicSRC.currentTime = (musicBarOffset / musicBarWidth) * songDuration;
        
})

musicSRC.addEventListener('ended',()=>{
    nextSong();
})

function createDynamicMusicSwiper()
{
    for(let m = 0; m < musicArray.length; m++)
        {
            let dynamicSwiper = `<div targetMusic = ${m+1} class="swiper-slide mini-music-player-songs" onclick = "targetSong(this)">
                                    <div class="mini-music-player-songs-insides">
                                        <img src='imgs/${musicArray[m].img}.jpg' class="song-img">
                                        <img src="" class="play-img">
                                    </div>
                                    <h4>${musicArray[m].songName + 1}</h4>
                                    <small>${musicArray[m].ArtistName + 1}</small>
                                </div>`
                                
            addSongsListWrapper.insertAdjacentHTML('beforeend', dynamicSwiper);

        }
}

function targetSong(target)
{
    let createAttribute = target.getAttribute('targetMusic');
    musicIndex = createAttribute;
    musicLists(musicIndex);
    playMusic.click();
    addClasstoMusic();
}

function addClasstoMusic()
{
    for(let j = 0; j < musicArray.length; j++)
        {
            if(document.querySelectorAll('.mini-music-player-songs')[j].classList.contains('active'))
                {
                    document.querySelectorAll('.mini-music-player-songs')[j].classList.remove('active');
                }
                if(document.querySelectorAll('.mini-music-player-songs')[j].getAttribute('targetMusic') == musicIndex)
                {
                    document.querySelectorAll('.mini-music-player-songs')[j].classList.add('active');
                }
            

        }
}

// mini Music player next page button js code
let miniMusicPlayer = document.querySelector('.mini-music-player');
let HeartCanvas = document.querySelector('#canvasTwo');
function miniMusicNextBtn()
{
    miniMusicPlayer.classList.add('active');
    setTimeout(()=>{
        createHearts();
    },2000);
    
}

function createHearts()
{
    var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite,
    Bodies = Matter.Bodies;
    
    // create engine
    var engine = Engine.create(),
        world = engine.world;
    
    // create renderer
    var render = Render.create({
        element: document.getElementById('canvasTwo'),
        engine: engine,
        options: {
            background : "none",
            width: 330,
            height: 700,
            wireframes : false,
        }
    });
    
    Render.run(render);
    
    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);
    
    // creating shape to animate 
    for(let s = 0; s < 40; s++)
    {
    
        let dynamicShapes = Bodies.circle(400, -200 + s * 20, 50, {
            restitution: 1, // set the restitution to a value between 0 and 1 to add bouncy effect to your bodies
            render: {
                sprite: {
                    texture: "imgs/1.png",
                    xScale: 0.7,
                    yScale: 0.7,
                }
            }
        });
        Composite.add(world, dynamicShapes);
    }
    
    
    // add static circle in the middle of the canvas
    let staticCircle = Bodies.circle(400, 200, 200, {
        isStatic: true,
        render: {
            sprite: {
                // texture : "imgs/gal-3.jpg",
                xScale : 0.8,
                yScale : 0.8,
            }
        }
    });
    Composite.add(world, staticCircle);
    
    // add mouse control
    var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.9,
            render: {
                visible: false
            }
        }
    });
    
    Composite.add(world, mouseConstraint);
    
    Composite.add(world, [
        Bodies.rectangle(400, -300, 800, 10, { 
            isStatic: true,
            render: {
                visible : false,
            }
        }),
        Bodies.rectangle(400, 1150, 800, 10, { 
            isStatic: true,
            render: {
                visible : false,
            }
        }),
        Bodies.rectangle(800, 350, 50, 1600, { 
            isStatic: true,
            render: {
                visible : false,
            }
        }),
        Bodies.rectangle(0, 350, 50, 1600, { 
            isStatic: true,
            render: {
                visible : false,
            }
        }),
        mouseConstraint
    ]);
    
    // keep the mouse in sync with rendering
    render.mouse = mouse;
    
    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 1250 }
    });
    
}

// final page home btn js code 
function homeBtn()
{
   
   

    setTimeout(()=>{
        miniMusicPlayer.classList.remove('active');
    },0);

    setTimeout(()=>{
        cuteNotes.classList.remove('active');
    },500);

    setTimeout(()=>{
        cuteApps.classList.remove('active');
    },1000);
    
    setTimeout(()=>{
        frontPage.classList.remove('active');
    },1500);
}