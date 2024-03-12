'use strict';

const models = require('../models');
const { Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    const actions = ['browse', 'read', 'edit', 'add', 'delete'];
    const modelNames = Object.keys(models);

    const timestamp = Sequelize.literal('CURRENT_TIMESTAMP');

    for (let modelName of modelNames) {
      for (let action of actions) {
        const permissionName = `${action}_${modelName}`;

        // Check if the permission already exists
        const existingPermission = await models.permissions.findOne({
          where: { key: permissionName },
        });

        // If the permission does not exist, create it
        if (!existingPermission) {
          await queryInterface.bulkInsert('permissions', [
            {
              key: permissionName,
              table_name: modelName,
              created_at: timestamp,
              updated_at: timestamp,
            },
          ]);
        }
      }
    }
  },
};
