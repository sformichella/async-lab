const fsPromises = require('fs').promises;
const fetch = require('node-fetch');

const getCharacter = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.json())
}

module.exports = {
  getCharacter
}

getCharacter(1).then(res => console.log(res))