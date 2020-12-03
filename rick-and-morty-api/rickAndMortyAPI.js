const fetch = require('node-fetch');

const getCharacter = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.json())
    .then(result => mungeData(result))
}

const mungeData = data => {
  const { name, status, species } = data;
  return { name, status, species }
}

module.exports = {
  getCharacter
}
