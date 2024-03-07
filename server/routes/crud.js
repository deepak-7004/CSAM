const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');

router.get('/landing-pages', crudController(models.landing_page).getAll);

module.exports = (app) => {
  app.use('/api/crud', router);
};
