const fs = require('fs');
const path = require('path');

module.exports = () => {
  fs.readdirSync(__dirname)
    .filter((file) => {
      console.log('file', file);
      return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach((file) => {
      console.log('Loading model: ' + file);
      require(path.join(__dirname, file));
    });
};
