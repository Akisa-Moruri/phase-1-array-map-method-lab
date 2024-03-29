const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  function titleCaseWord(word) {
    // Capitalize the first letter of the word and add the rest of the word
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Split each string into an array of words, apply the `titleCaseWord()` function to each word, and then join the words back together
  return tutorials.map(title => title.split(' ').map(titleCaseWord).join(' '));
}

// Example usage
console.log(titleCased());