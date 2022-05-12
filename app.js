let state = "start";

function addSound(name, audioSrc, imageSrc) {
  const container = document.createElement("div");
  container.classList.add("meme");

  const button = document.createElement("button");
  button.classList.add("btn");
  button.id = name;

  container.appendChild(button);

  const img = document.createElement("img");
  img.src = `images/${imageSrc}`;

  button.appendChild(img);

  const buttonAudio = new Audio(audioSrc);

  buttonAudio.volume = 0.25;

  button.addEventListener("click", (e) => {
    if (state === "start" || state === "input") {
      button.style.backgroundColor = "red";

      buttonAudio.play();
      buttonAudio.onended = () => {
        button.style.backgroundColor = "white";
      };
    }

    if (state === "input") {
      alert("you have lost!");
    }
  });

  document.getElementById("buttons").appendChild(container);
}

function myinstantsSound(soundName) {
  return `https://www.myinstants.com/media/sounds/${soundName}.mp3`;
}

const sounds = [
  {
    name: "minecraft",
    audioSrc: myinstantsSound("steve-old-hurt-sound_XKZxUk4"),
    imageSrc: "steve.png",
  },

  {
    name: "nut",
    audioSrc: myinstantsSound("deez-nuts-sound-effect-free-download-hd-"),
    imageSrc: "nut.png",
  },

  {
    name: "roblox",
    audioSrc: myinstantsSound("roblox-death-sound_1"),
    imageSrc: "roblox.png",
  },

  {
    name: "windows",
    audioSrc: myinstantsSound("erro"),
    imageSrc: "windows.jpg",
  },

  {
    name: "fbi",
    audioSrc: myinstantsSound("fbi-open-up-sfx"),
    imageSrc: "fbi.png",
  },

  {
    name: "dog",
    audioSrc: myinstantsSound("yt1s_wU4BGgD"),
    imageSrc: "dog.jpeg",
  },

  {
    name: "chewbacca",
    audioSrc: myinstantsSound("chewbacca.swf"),
    imageSrc: "chewbacca.jpg",
  },

  {
    name: "amongus",
    audioSrc: myinstantsSound("among"),
    imageSrc: "amongus.jpg",
  },

  {
    name: "dababy",
    audioSrc: myinstantsSound("dababy-suge-lyrics-1"),
    imageSrc: "dababy.jpg",
  },
];

for (let i = 0; i < sounds.length; i++) {
  addSound(sounds[i].name, sounds[i].audioSrc, sounds[i].imageSrc);
}
const gameState = [];

function playGameState(currentGameStateIndex) {
  if (currentGameStateIndex > gameState.length - 1) {
    state = "input";
    displayDebug();
    return;
  }
  const sound = sounds[gameState[currentGameStateIndex]];
  const audio = new Audio(sound.audioSrc);
  audio.volume = 0.25;

  const button = document.getElementById(sound.name);
  button.style.backgroundColor = "red";

  audio.play();
  audio.onended = () => {
    button.style.backgroundColor = "white";
    setTimeout(playGameState, 1000, currentGameStateIndex + 1);
  };

  displayDebug();
}

document.getElementById("game").addEventListener("click", (e) => {
  gameState.push(generateNextSoundIndex());
  displayDebug();
});

function generateNextSoundIndex() {
  return Math.floor(Math.random() * sounds.length);
}

document.getElementById("start").addEventListener("click", (e) => {
  state = "playing";
  playGameState(0);
});

function displayDebug() {
  const debug = document.getElementById("debug");
  debug.innerHTML = "";
  let p;

  p = document.createElement("p");
  p.innerText = `Game state: [${gameState.join(",")}]`;
  debug.appendChild(p);

  p = document.createElement("p");
  p.innerText = `State: ${state}`;
  debug.appendChild(p);
}

displayDebug();
