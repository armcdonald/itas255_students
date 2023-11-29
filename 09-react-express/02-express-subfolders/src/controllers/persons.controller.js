const persons = require('../services/persons.service');

async function get(req, res, next) {
  try {
      res.json(await persons.get(req));
  } catch (err) {
      console.error(`Error while getting persons`, err.message);
      next(err);
  }
}

module.exports = {
  get
};
