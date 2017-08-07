const express = require('express');
const router = express.Router();
const swaggerJSDoc = require('swagger-jsdoc');

router.get('/', (req, res) => {
  const options = {
    swaggerDefinition: {
      info: {
        title: 'Usecases API',
        version: '1.0.0',
      },
    },
    apis: ['./routes/*.js', './models/*.js'], // Path to the API docs
  };

  // Initialize swagger-jsdoc -> returns validated swagger spec in json format
  const swaggerSpec = swaggerJSDoc(options);
  res.json(swaggerSpec);
});

module.exports = (app) => {
  app.use('/swagger/docs/api.json', router);
};
