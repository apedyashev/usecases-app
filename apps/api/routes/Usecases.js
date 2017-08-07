var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Usecase = mongoose.model('Usecase');

 /**
  * @swagger
  * tags:
  *   name: Usecases
  *   description: Usecases operations
  *
  */
router.get('/', (req, res) => {
  Usecase.find().then((usecases) => {
    res.json(usecases);
  }).catch(() => {
    res.send(500);
  });
});

module.exports = (app) => {
  app.use('/usecases', router);
};
