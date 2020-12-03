const { getCharacter, getManyCharaters } = require('./rickAndMortyAPI');
const fetch = require('node-fetch');

const mockRickData = require('./rick-mock-data.json');
const mockManyData = require('./many-mock-data.json');

jest.mock('node-fetch');

describe('getCharacter', () => {
  it('should return a character', async() => {

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

describe('getManyCharaters', () => {
  it('should return several characters', async () => {

    const expected = [
      { name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
      { name: 'Rick Sanchez', status: 'Alive', species: 'Human' },
      { name: 'Rick Sanchez', status: 'Alive', species: 'Human' }
    ]

    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockRickData)
    })

    const ids = [3141, 5926, 5358];
    const actual = await getManyCharaters(ids);

    expect(actual).toEqual(expected);
  });
});