const fsPromises = require('fs').promises;
const { transformer } = require('./transformer');



const exampleFile = './transformer-example.txt';
const expected = 'GO YZA EH REV SPMU XO NWOR KCIU EH';

describe('transformer', () => {

  it('should transform the string', async () => {

    const actual = await transformer(exampleFile);

    expect(actual).toEqual(expected);
  });
});