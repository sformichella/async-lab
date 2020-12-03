const fsPromises = require('fs').promises;
const { getCharacter } = require('./rickAndMortyAPI');

const exampleFile = './copy-example.txt';


describe('getCharacter', () => {
  it('should return a character', async () => {
    const id = 1;
    const expectedName = 'Rick Sanchez';

    const { name: actualName } = await getCharacter(id);

    expect(actualName).toEqual(expectedName)
  });
});