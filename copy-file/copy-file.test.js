const fsPromises = require('fs').promises;
const { copyFile } = require('./copy-file');

const exampleFile = './copy-example.txt';


describe('copyFile', () => {

  afterAll(() => {
    return fsPromises.rm('./test-copy.txt')
  })

  it('should copy the contents and make a new file', async() => {
    const copiedFile = await copyFile(exampleFile, './test-copy.txt');

    expect(copiedFile).toEqual('blarg');
  });
});