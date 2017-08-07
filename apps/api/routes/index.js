var fs = require('fs'),
    path = require('path');

module.exports = function(app) {
  fs.readdirSync(__dirname)
    .filter(function(file) {
      console.log('file', file);
      return (file.indexOf('.') !== 0) && (file !== 'index.js');
    })
    .forEach(function(file) {
      console.log('Loading model: ' + file);
      require(path.join(__dirname, file))(app);
    });
};
