const Sequelize = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
// const env = 'staging';

const envConfig = {
  username: 'Cybersadsqlusersadsd',
  password: 'Sqlcybersecurity@12345sdasd',
  database: 'csam_react',
  dialect: 'mysql',
  host: '10.1.0.3',
  socketPath:
    '/cloudsql/abi-ghq-01190-cybersecurity:europe-west2:abi-ghq-cybersecurity-mysql-instance',
};

const sequelize = new Sequelize(config[env]);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.activities = require('../models/activities.js')(sequelize, Sequelize);
db.archives = require('../models/archives.js')(sequelize, Sequelize);
db.archiveName = require('../models/archiveNames.js')(sequelize, Sequelize);
db.badges = require('../models/badges.js')(sequelize, Sequelize);
db.banners = require('../models/banners.js')(sequelize, Sequelize);
db.users = require('../models/users.js')(sequelize, Sequelize);
db.permission_roles = require('../models/permissionRoles.js')(
  sequelize,
  Sequelize,
);
db.permissions = require('../models/permissions.js')(sequelize, Sequelize);
db.roles = require('../models/roles.js')(sequelize, Sequelize);
db.landing_page = require('../models/landingPage.js')(sequelize, Sequelize);
db.good_reads = require('../models/goodReads.js')(sequelize, Sequelize);
db.good_read_newsletter = require('../models/goodReedNewsletter.js')(sequelize, Sequelize);
db.good_read_suggested_articles = require('./goodReadSuggestedArticles.js')(sequelize, Sequelize);

const models = {
  User: db.users,
  Role: db.roles,
  Permission: db.permissions,
  PermissionRole: db.permission_roles,
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

require('./associations.js')(models);

sequelize
  .sync()
  .then(() => console.log('Tables have been created'))
  .catch((error) => console.log('Error occurred:', error));

module.exports = db;
