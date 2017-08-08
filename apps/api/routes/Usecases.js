const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Usecase = mongoose.model('Usecase');
const _ = require('lodash');

/**
* @swagger
* tags:
*   name: Usecases
*   description: Usecases operations
*
* /usecases:
*   get:
*     summary: Lists usecases
*     tags: [Usecases]
*     produces:
*       - application/json
*     parameters:
*       - $ref: "#/parameters/page"
*       - $ref: "#/parameters/perPage"
*     responses:
*       200:
*        description: Ok
*        schema:
*          $ref: "#/definitions/UsecasesListResponseOk"
*       500:
*         description: Server error
*
* definitions:
*   UsecasesListResponseOk:
*     type: object
*     properties:
*       items:
*         type: array
*         items:
*           $ref: "#/definitions/SerializedUsecase"
*       pagination:
*         $ref: "#/definitions/PaginationObject"
*   PaginationObject:
*     type: object
*     properties:
*       currentPage:
*         type: number
*       nextPage:
*         type: number
*         enum: ['null', 'number']
*       prevPage:
*         type: number
*         enum: ['null', 'number']
*       totalPages:
*         type: number
*       totalCount:
*         type: number
*       perPage:
*         type: number
* parameters:
*   page:
*     name: page
*     in: query
*     description: Current page.
*     required: false
*     type: integer
*     default: 1
*   perPage:
*     name: perPage
*     in: query
*     description: Default items per page.
*     required: false
*     type: integer
*     default: 10
*/
router.get('/', (req, res) => {
  const perPage = +req.query.perPage || 10;
  const page = +req.query.page || 1;
  Usecase.paginate({}, {page, limit: perPage}).then((result) => {
    res.json({
      items:  result.docs,
      pagination: _.omit(result, 'docs'),
    });
  }).catch(() => {
    res.send(500);
  });
});

/**
* @swagger
* tags:
*   name: Usecases
*   description: Usecases operations
*
* /usecases:
*   post:
*     summary: Creates a new usecase
*     tags: [Usecases]
*     produces:
*       - application/json
*     parameters:
*       - name: payload
*         description: Endpoint's payload.
*         in: body
*         required: true
*         schema:
*           $ref: "#/definitions/UsecaseCreateUpdatePayload"
*     responses:
*       201:
*        description: Created
*        schema:
*          $ref: "#/definitions/UsecaseResponseOk"
*       500:
*         description: Server error
*
* definitions:
*   UsecaseResponseOk:
*     type: object
*     properties:
*       item:
*         $ref: "#/definitions/SerializedUsecase"
*   UsecaseCreateUpdatePayload:
*     type: object
*     required:
*       - title
*       - body
*     properties:
*       title:
*         type: string
*       body:
*         type: string
*/
router.post('/', (req, res) => {
  const usecase = new Usecase(req.body);

  usecase.save().then((usecase) => {
    res.status(201);
    res.json({
      item: usecase,
    });
  }).catch((e) => {
    console.log('Unable to create an usecase', e);
    res.send(500);
  });
});

module.exports = (app) => {
  app.use('/usecases', router);
};
