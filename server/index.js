// Import modules
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { expressjwt: jwt } = require('express-jwt');
const db = require('./models');
const { ssoLogin } = require('./controllers/users');
const { checkPermissions } = require('./middleware/auth.js');

// Initialize app and middleware
const app = express();
const upload = multer();
app.use(upload.array());
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

// JWT middleware
const jwtMiddleware = jwt({
  secret: 'this-is-very-long-secret-that-can-not-be-cracked-easily',
  algorithms: ['HS256'],
});
app.post('/api/users/sso-login', ssoLogin);
app.use(jwtMiddleware);

// Routes
['home', 'file', 'users', 'crud'].forEach((route) => {
  require(`./routes/${route}`)(app);
});
app.get('/protected-route', checkPermissions(['browse_admin']), (req, res) => {
  console.log('User permissions:', req.auth.permissions);
  res.send('Access granted to protected route');
});

// Database sync
db.sequelize
  .sync()
  .then(() => {
    console.log('Database is connected');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

// Start server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
