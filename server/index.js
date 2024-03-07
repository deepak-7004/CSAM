const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer();

app.use(upload.array());
app.use(express.static('public'));
app.use(express.json());
const port = process.env.PORT || 3001;
app.use(cors());
const db = require('./models');
let { expressjwt: jwt } = require('express-jwt');
const { ssoLogin } = require('./controllers/users');

const jwtMiddleware = jwt({
  secret: 'this-is-very-long-secret-that-can-not-be-cracked-easily',
  algorithms: ['HS256'],
});
app.post('/api/users/sso-login', ssoLogin);
app.use(jwtMiddleware);

db.sequelize
  .sync()
  .then(() => {
    console.log('Database is connected');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

['home', 'file', 'users', 'crud'].forEach((route) => {
  require(`./routes/${route}`)(app);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
