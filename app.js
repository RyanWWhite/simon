let state = "start";
let gameState = [];
let currentGameStateIndex = 0;

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
        button.style.backgroundColor = "";
      };
    }

    if (state === "input") {
      const expectedSound = sounds[gameState[currentGameStateIndex]];

      const isExpectedSound = expectedSound.name === name;

      if (isExpectedSound) {
        currentGameStateIndex += 1;
        if (currentGameStateIndex === gameState.length) {
          alert("Winner!");
        }
      } else {
        alert("Incorrect");
        gameState = [];
        state = "start";
        currentGameStateIndex = 0;
      }
    }

    displayDebug();
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
    name: "grandmas",
    audioSrc: myinstantsSound("100-grandmas"),
    imageSrc: "grandmas.png",
  },

  {
    name: "roblox",
    audioSrc: myinstantsSound("roblox-death-sound_1"),
    imageSrc: "roblox.png",
  },

  {
    name: "windows",
    audioSrc: myinstantsSound("preview_4"),
    imageSrc: "windows.png",
  },

  {
    name: "fbi",
    audioSrc: myinstantsSound("fbi-open-up-sfx"),
    imageSrc: "fbi.png",
  },

  {
    name: "dog",
    audioSrc: myinstantsSound("yt1s_wU4BGgD"),
    imageSrc: "dog.png",
  },

  {
    name: "owen",
    audioSrc: myinstantsSound("wow-owen-wilson-sound-effect-download-1"),
    imageSrc: "owen.png",
  },

  {
    name: "amongus",
    audioSrc: myinstantsSound("among"),
    imageSrc: "amongus.png",
  },

  {
    name: "dababy",
    audioSrc: myinstantsSound("dababy-suge-lyrics-1"),
    imageSrc: "dababy.png",
  },
];

for (let i = 0; i < sounds.length; i++) {
  addSound(sounds[i].name, sounds[i].audioSrc, sounds[i].imageSrc);
}

function playGameState() {
  if (currentGameStateIndex > gameState.length - 1) {
    currentGameStateIndex = 0;
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
    currentGameStateIndex += 1;
    button.style.backgroundColor = "";
    setTimeout(playGameState, 500);
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
  const debugElement = document.getElementById("debug");
  debugElement.innerHTML = "";

  const outputs = {};

  const debug = (title, value) => {
    outputs[title] = value;
    const p = document.createElement("p");
    p.innerHTML = `${title}: ${value}`;
    debugElement.appendChild(p);
  };

  debug("Game State", `[$gameState.join(",")}]`);
  debug("sate", state);
  debug("Current game state index", currentGameStateIndex);

  console.table(outputs);
}

displayDebug();
