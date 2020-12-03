const fsPromises = require('fs').promises;

const copyFile = (source, destination) => {
  return fsPromises.readFile(source, 'utf-8')
    .then(result => fsPromises.writeFile(destination, result))
    .then(() => fsPromises.readFile(destination, 'utf-8'))
    .catch(err => console.log(err))
}

module.exports = {
  copyFile
}