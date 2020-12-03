const { getCharacter } = require('./rickAndMortyAPI');
const fetch = require('node-fetch');

const mockRickData = require('./rick-mock-data.json');

jest.mock('node-fetch')

describe('getCharacter', () => {
  it('should return a character', async () => {

    const expectedName = 'Rick Sanchez';

    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockRickData)
    })

    const id = 1;
    const { name: actualName } = await getCharacter(id);

    expect(actualName).toEqual(expectedName)
  });

  it('should return the correct format', async () => {

    const expected = {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human"
    }

    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockRickData)
    })

    const id = 1;
    const actual = await getCharacter(id);

    expect(actual).toEqual(expected);
  });
});