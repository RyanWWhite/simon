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

  const buttonAudio = new Audio(
    `https://www.myinstants.com/media/sounds/${audioSrc}.mp3`
  );

  button.addEventListener("click", (e) => {
    buttonAudio.play();
  });

  document.getElementById("buttons").appendChild(container);
}

const sounds = [
  {
    name: "minecraft",
    audioSrc: "steve-old-hurt-sound_XKZxUk4",
    imageSrc: "steve.png",
  },

  {
    name: "nut",
    audioSrc: "deez-nuts-sound-effect-free-download-hd-",
    imageSrc: "nut.png",
  },

  { name: "roblox", audioSrc: "roblox-death-sound_1", imageSrc: "roblox.png" },

  { name: "windows", audioSrc: "erro", imageSrc: "windows.jpg" },

  { name: "fbi", audioSrc: "fbi-open-up-sfx", imageSrc: "fbi.png" },

  {
    name: "dog",
    audioSrc: "yt1s_wU4BGgD",
    imageSrc: "dog.jpeg",
  },

  {
    name: "chewbacca",
    audioSrc: "chewbacca.swf",
    imageSrc: "chewbacca.jpg",
  },

  { name: "amongus", audioSrc: "among", imageSrc: "amongus.jpg" },

  { name: "dababy", audioSrc: "dababy-suge-lyrics-1", imageSrc: "dababy.jpg" },
];

for (let i = 0; i < sounds.length; i++) {
  addSound(sounds[i].name, sounds[i].audioSrc, sounds[i].imageSrc);
}
const gameState = [3, 2, 6, 0, 7, 8, 4, 1, 5];

function playSounds(currentGameStateIndex) {
  // //if (soundID > sounds.length - 1) {
  //   return;
  // }
  const sound = sounds[gameState[currentGameStateIndex]];
  const audio = new Audio(
    `https://www.myinstants.com/media/sounds/${sound.audioSrc}.mp3`
  );
  audio.volume = 0.25;

  const button = document.getElementById(sound.name);
  button.style.backgroundColor = "red";

  audio.play();
  audio.onended = () => {
    button.style.backgroundColor = "white";
    setTimeout(playSounds, 1000, currentGameStateIndex + 1);
  };
}

function gameState() {
  document.getElementById("game");
}

function generateNextSound() {
  return sounds[Math.floor(Math.random() * sounds.length)];
}

document.getElementById("start").addEventListener("click", (e) => {
  playSounds(0);
});
