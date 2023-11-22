const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars.controller');

/* GET single car. */
router.get('/:id', carsController.getOne);
  
/* GET cars. */
router.get('/', carsController.get);
  
/* POST cars */
router.post('/', carsController.create);

/* PUT cars */
router.put('/:id', carsController.update);

/* DELETE cars */
router.delete('/:id', carsController.remove);

module.exports = router;