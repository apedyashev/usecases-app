
const mongodb = require('mongodb');
const usecasesData = require('./seeds/usecases.json');

exports.up = function(db, next){
  const usecases = db.collection('usecases');
  usecases.insertMany(usecasesData, next);
};

exports.down = function(db, next){
    next();
};
