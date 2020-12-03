const { getCharacter } = require('./rickAndMortyAPI');


describe('getCharacter', () => {
  it('should return a character', async () => {
    const id = 1;
    const expectedName = 'Rick Sanchez';

    const { name: actualName } = await getCharacter(id);

    expect(actualName).toEqual(expectedName)
  });

  it('should return the correct format', async () => {
    const id = 1;

    const expected = {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human"
    }

    const actual = await getCharacter(id);

    expect(actual).toEqual(expected);
  });
});