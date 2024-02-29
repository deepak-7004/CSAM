const Sequelize = require("sequelize");
const config = require('../config/dbConfig.js');
const sequelize = new Sequelize(config);

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.activities = require("../models/activities.js")(sequelize, Sequelize);
db.archives = require("../models/archives.js")(sequelize, Sequelize)
db.archiveName = require("../models/archiveNames.js")(sequelize, Sequelize)
db.badges = require("../models/badges.js")(sequelize, Sequelize)
db.banners = require("../models/banners.js")(sequelize, Sequelize)
db.users = require("../models/users.js")(sequelize, Sequelize)
module.exports = db