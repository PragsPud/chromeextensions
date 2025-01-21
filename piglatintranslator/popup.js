document.addEventListener('DOMContentLoaded', function() {
  var translateButton = document.getElementById('translateButton');
  translateButton.addEventListener('click', translateText);
});

function translateText() {
  var translateDirection = document.getElementById('translateDirection').value;
  var textInput = document.getElementById('textInput').value;
  var translationResult = document.getElementById('translationResult');

  var translatedText = '';

  if (translateDirection === 'englishToPigLatin') {
    translatedText = translateEnglishToPigLatin(textInput);
  } else if (translateDirection === 'pigLatinToEnglish') {
    translatedText = translatePigLatinToEnglish(textInput);
  }

  translationResult.textContent = translatedText;
}

function translateEnglishToPigLatin(text) {
  var words = text.split(' ');
  var translatedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    var firstLetter = word.charAt(0);
    var pigLatinWord = '';

    if (isVowel(firstLetter)) {
      pigLatinWord = word + 'ay';
    } else {
      pigLatinWord = word.substring(1) + firstLetter + 'ay';
    }

    translatedWords.push(pigLatinWord);
  }

  return translatedWords.join(' ');
}

function translatePigLatinToEnglish(text) {
  var words = text.split(' ');
  var translatedWords = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    var lastTwoLetters = word.substring(word.length - 2);
    var englishWord = '';

    if (lastTwoLetters === 'ay') {
      englishWord = word.substring(0, word.length - 2);
      englishWord = englishWord.charAt(englishWord.length - 1) + englishWord.substring(0, englishWord.length - 1);
    } else {
      englishWord = word;
    }

    translatedWords.push(englishWord);
  }

  return translatedWords.join(' ');
}

function isVowel(letter) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(letter) !== -1;
}
