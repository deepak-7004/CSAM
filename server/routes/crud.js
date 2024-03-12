const express = require('express');
const router = express.Router();
const models = require('../models');
const crudController = require('../controllers/crudController');
const { checkPermissions } = require('../middleware/auth.js');

router.get(
  '/landing-pages',
  checkPermissions(['browse_landing_page']),
  crudController(models.landing_page).getAll,
);


router.get(
  '/good-reads-and-newsletter',
  async (req, res, next) => {
    try {
      const [goodReadsData, newsletterData, suggestedArticlesData] = await Promise.all([
        models.good_reads.findAll(),
        models.good_read_newsletter.findAll(),
        models.good_read_suggested_articles.findAll(),
      ]);

      // Send data as an object with separate properties
      res.json({
        goodReadsData,
        newsletterData,
        suggestedArticlesData
      });

      console.log('====================================');
      console.log('suggestedArticlesData', suggestedArticlesData);
      console.log('====================================');

    } catch (error) {
      next(error);
    }
  }
);


module.exports = (app) => {
  app.use('/api/crud', router);
};
