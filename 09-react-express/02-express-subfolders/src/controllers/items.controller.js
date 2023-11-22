const items = require('../services/items.service');

async function get(req, res, next) {
  try {
      res.json(await items.getMultiple());
  } catch (err) {
      console.error(`Error while getting items`, err.message);
      next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(await items.create(req.body));
  } catch (err) {
    console.error(`Error while creating item`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    console.log(req.body);
    res.json(await items.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating item`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json(await items.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting item`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  create,
  update,
  remove
};
