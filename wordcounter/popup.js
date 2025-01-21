document.addEventListener('DOMContentLoaded', function() {
  var countButton = document.getElementById('countButton');
  countButton.addEventListener('click', countWords);
});

function countWords() {
  var inputText = document.getElementById('inputText').value;
  var wordCount = inputText.trim().split(/\s+/).length;
  var wordCountElement = document.getElementById('wordCount');
  wordCountElement.textContent = 'Word Count: ' + wordCount;
}
