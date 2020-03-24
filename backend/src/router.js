const express = require('express');
const routes = express.Router();
const OngConroller = require('../src/controllers/OngController');
const IncidentsController = require('../src/controllers/IncidentsController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

routes.post('/session', SessionController.create)

routes.get('/ongs', OngConroller.index);
routes.post('/ongs', OngConroller.create);


routes.post('/incidents',IncidentsController.create);
routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id', IncidentsController.deletar);

routes.get('/profile',ProfileController.index);
module.exports = routes;