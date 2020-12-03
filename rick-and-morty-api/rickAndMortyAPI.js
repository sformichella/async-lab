const fetch = require('node-fetch');

const getCharacter = async(id) => {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const json = await data.json();

  return mungeData(json);
}

const mungeData = data => {
  const { name, status, species } = data;
  return { name, status, species }
}

const getManyCharaters = ids => {
  return Promise.all(
    ids.map(id => getCharacter(id))
  );
}

module.exports = {
  getCharacter,
  getManyCharaters
}
