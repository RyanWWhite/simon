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
    name: "damage",
    audioSrc: "emotional-damage-meme",
    imageSrc: "damage.jpg",
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
  console.log("addSound");
  addSound(sounds[i].name, sounds[i].audioSrc, sounds[i].imageSrc);
}

function playSounds(soundID) {
  if (soundID > 8) {
    return;
  }
  const sound = sounds[soundID];
  const audio = new Audio(
    `https://www.myinstants.com/media/sounds/${sound.audioSrc}.mp3`
  );

  audio.play();
  //background code//
  setTimeout(playSounds, 1000, soundID + 1);
}

// function playSounds(sounds) {
//   const sound = sounds[0];
//   const audio = new Audio(
//     `https://www.myinstants.com/media/sounds/${sounds.audioSrc}.mp3`
//   );

//   audio.play();
// }

document.getElementById("test").addEventListener("click", (e) => {
  //playSounds(test);
  console.log("button");
  playSounds(0);
});
