const usecasesData = require('./seeds/usecases.json');

exports.up = (db, next) => {
  const usecases = db.collection('usecases');
  usecases.insertMany(usecasesData, next);
};

exports.down = (db, next) => {
  next();
};
