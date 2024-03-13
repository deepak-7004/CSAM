const db = require('../models');
const User = db.users;
const jwttoken = require('jsonwebtoken');
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
};

const ssoLogin = async (req, res) => {
  const { username, name } = req.body;
  if (!username || !name) {
    return res
      .status(400)
      .send('Validation Error: Username and name are required');
  }

  const domain = username.split('@')[1].toLowerCase();
  if (domain !== 'ab-inbev.com') {
    return res
      .status(400)
      .send('Validation Error: Email domain is not an organization domain');
  }

  try {
    let user = await User.findOne({ where: { email: username } });

    if (!user) {
      user = await User.create({
        email: username,
        country: null,
        name: name,
        password: null,
        role_id: 2,
        avatar: 'users/default.png',
      });
    }

    const role = await user.getRole();
    const permissions = await role.getPermissions();
    const flattenedPermissions = permissions.map(
      (permission) => permission.key,
    );

    const token = jwttoken.sign(
      { userId: user.id, permissions: flattenedPermissions },
      'this-is-very-long-secret-that-can-not-be-cracked-easily',
      { expiresIn: '1h' },
    );

    res.json({ token_type: 'Bearer', access_token: token });
  } catch (error) {
    console.error('Error handling login or signup:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Internal Server Error');
  }
};

const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await User.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Internal Server Error');
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      await user.update(updatedUserData);
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Internal Server Error');
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  ssoLogin,
};
