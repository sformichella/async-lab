const fsPromises = require('fs').promises;
const { copyFile } = require('./copy-file');

const exampleFile = './example.txt';


describe('copyFile', () => {

  afterEach(() => {
    return fsPromises.rm('./test-copy.txt')
  })

  it('should copy the contents and make a new file', () => {
    copyFile(exampleFile, './test-copy.txt')
      .then(() => fsPromises.readFile('./test-copy.txt', 'utf-8'))
      .then(result => expect(result).toEqual('blarg'))
  });
});