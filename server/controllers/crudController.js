const create = (model) => async (req, res) => {
  const item = await model.create(req.body);
  return res.status(201).json(item);
};

const getAll = (model) => async (req, res) => {
  const items = await model.findAll();
  return res.status(200).json(items);
};

const getById = (model) => async (req, res) => {
  const item = await model.findByPk(req.params.id);
  if (item) {
    return res.status(200).json(item);
  }
  return res.status(404).send('Item with the specified ID does not exists');
};

const update = (model) => async (req, res) => {
  await model.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  const updatedItem = await model.findByPk(req.params.id);
  return res.status(200).json(updatedItem);
};

const remove = (model) => async (req, res) => {
  await model.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.status(200).send('Item has been deleted');
};

module.exports = (model) => ({
  create: create(model),
  getAll: getAll(model),
  getById: getById(model),
  update: update(model),
  remove: remove(model),
});
