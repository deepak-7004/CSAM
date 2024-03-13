const jwt = require('jsonwebtoken');

exports.checkPermissions = function (requiredPermissions) {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.sendStatus(401);
    }

    jwt.verify(
      token,
      'this-is-very-long-secret-that-can-not-be-cracked-easily',
      (err, payload) => {
        if (err) {
          return res.sendStatus(403);
        }

        const userPermissions = payload.permissions;
        const hasRequiredPermissions = requiredPermissions.every((permission) =>
          userPermissions.includes(permission),
        );

        if (!hasRequiredPermissions) {
          return res.sendStatus(403);
        }

        next();
      },
    );
  };
};
