const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", verseChangingAction);

function verseChangingAction() {
  let verse = verseChoose.value;

  updateDisplay(verse);
}
function updateDisplay(verse) {
  verse = verse.replace(" ", "");
  verse = verse.toLowerCase();
  let url = verse + ".txt";
  // New Fetch request

  fetch(url).then(function(response) {
    response.text().then(function(text) {
      poemDisplay.textContent = text;
    });
  });
  // Old XHR request
  // let request = new XMLHttpRequest();
  // request.open("GET", url);
  // request.responseType = "text";
  // request.onload = function() {
  //   poemDisplay.textContent = request.response;
  // };
  // request.send();

};

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";

