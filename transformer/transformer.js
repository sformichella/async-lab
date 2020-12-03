const fsPromises = require('fs').promises;

const removeCapitals = input => {
  const filteredInput = input.split('')
    .filter(letter => {
      if(letter === ' ') return true

      return letter !== letter.toUpperCase()
    });

  return filteredInput.join('');
}

const capitalize = input => {
  return input.toUpperCase();
}

const reverseString = input => {
  return input
    .split('')
    .reverse()
    .join('')
}

const transformer = filePath => {

}

module.exports = {
  transformer
}