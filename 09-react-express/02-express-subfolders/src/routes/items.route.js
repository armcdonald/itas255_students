const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items.controller');

/* GET item. */
router.get('/', itemsController.get);
  
/* POST items */
router.post('/', itemsController.create);

/* PUT items */
router.put('/:id', itemsController.update);

/* DELETE items */
router.delete('/:id', itemsController.remove);

module.exports = router;
