const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');
const guard = require('express-jwt-permissions')();

const secret = 'your-secret-key'; // replace with your secret key

// Middleware to check JWT
exports.checkJwt = expressJwt({ secret });

// Middleware to check permissions
exports.checkPermissions = (permissions) => {
  return [this.checkJwt, guard.check(permissions)];
};

// Function to sign JWTs
exports.signJwt = (payload) => {
  return jwt.sign(payload, secret);
};
