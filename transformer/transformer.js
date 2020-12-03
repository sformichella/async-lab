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
  return fsPromises.readFile(filePath, 'utf-8')
    .then(result => removeCapitals(result))
    .then(result => capitalize(result))
    .then(result => reverseString(result))
    .catch(err => console.log(err))
}

module.exports = {
  transformer
}