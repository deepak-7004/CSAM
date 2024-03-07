const Sequelize = require('sequelize');
const config = require('../config/dbConfig.js');
const sequelize = new Sequelize(config);

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

const models = {
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
