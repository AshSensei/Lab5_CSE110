// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  const voiceSelection = document.getElementById("voice-select");
  const speakButton = document.querySelector("button");
  const emojiImage = document.querySelector("#explore img");
  const synth = window.speechSynthesis;
  const inputText = document.getElementById("text-to-speak");
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelection.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  

  speakButton.addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(inputText.value);
    const selectedOption =
    voiceSelection.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    
    utterThis.onstart = () => {
      emojiImage.src = "assets/images/smiling-open.png";
    };
    utterThis.onend = () => {
      emojiImage.src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);
  });

}