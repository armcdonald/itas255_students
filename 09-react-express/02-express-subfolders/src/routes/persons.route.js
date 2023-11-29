const express = require('express');
const router = express.Router();
const personsController = require('../controllers/persons.controller');

/* GET person or persons. */
router.get('/:id?', personsController.get);
  
module.exports = router;