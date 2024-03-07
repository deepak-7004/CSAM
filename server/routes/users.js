const users = require('../controllers/users');
const router = require('express').Router();
router.get('/', users.getUsers);
router.post('/', users.createUser);
router.get('/:id', users.getUserById);
router.put('/:id', users.updateUser);
router.delete('/:id', users.deleteUser);

module.exports = (app) => {
  app.use('/api/users', router);
};
