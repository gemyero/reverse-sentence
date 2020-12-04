const sentence = '  Mary had    a little  lamb     ';

function reverseSentence(sentence) {
  const reversedWords = sentence.match(/\w+/g).reverse();
  return sentence
    .replace(/\w+/g, '*')
    .split('')
    .reverse()
    .join('')
    .replace(/\*/g, () => reversedWords.shift());
}

console.log(sentence);
console.log(reverseSentence(sentence));
