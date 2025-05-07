// expose.js

window.addEventListener('DOMContentLoaded', init);
let audioDictionary = {
  "air-horn": "assets/audio/air-horn.mp3",
  "car-horn": "assets/audio/car-horn.mp3",
  "party-horn": "assets/audio/party-horn.mp3"
};
let imageDictionary = {
  "air-horn": "assets/images/air-horn.svg",
  "car-horn": "assets/images/car-horn.svg",
  "party-horn": "assets/images/party-horn.svg"
};


function init() {
  const audioSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const playAudioButton = document.querySelector("button");
  const soundElement = document.querySelector("audio");
  const volumeLevel = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  //changes audio depending on selection
  audioSelect.addEventListener("change", () => {
    const audioSelected = audioSelect.value;
    if(audioSelected in audioDictionary){
      soundElement.src = audioDictionary[audioSelected];
      hornImage.src = imageDictionary[audioSelected];
      hornImage.alt=audioSelect.value+" image";
      soundElement.load();

    }
  })
  const jsConfetti = new JSConfetti()

  
  
  //plays audio
  playAudioButton.addEventListener("click", () => {
    if(audioSelect.value != "select"){
      if(audioSelect.value == "party-horn"){
        jsConfetti.addConfetti();
      }
      soundElement.play();
    }
    
  });
  
  //volume selector icon changer
  volumeLevel.addEventListener("input", () => {
    const volume = volumeLevel.value;
    soundElement.volume = volumeLevel.value * 0.01;
    if(volume == 0){
      volumeImage.src = "assets/icons/volume-level-0.svg";
      volumeImage.alt = "Volume level 0";
    }
    else if (volume > 0 && volume < 33){
      volumeImage.src = "assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
    }
    else if (volume >= 33  && volume < 67){
      volumeImage.src = "assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
    }
    else if (volume >= 67){
      volumeImage.src = "assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
    }
  })

}