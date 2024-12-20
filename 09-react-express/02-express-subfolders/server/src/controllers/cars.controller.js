import * as cars from '../services/cars.service.js';

async function get(req, res, next) {
  try {
      res.json(await cars.get(req));
  } catch (err) {
      console.error(`Error while getting cars`, err.message);
      next(err);
  }
}

async function getOne(req, res, next) {
    try {
        res.json(await cars.getOne(req.params.id));
    } catch (err) {
        console.error(`Error while getting car`, err.message);
        next(err);
    }
  }
  
  async function create(req, res, next) {
  try {
    res.json(await cars.create(req.body));
  } catch (err) {
    console.error(`Error while creating item`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json(await cars.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating item`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await cars.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting item`, err.message);
    next(err);
  }
}

export {
  get,
  getOne,
  create,
  update,
  remove
};
