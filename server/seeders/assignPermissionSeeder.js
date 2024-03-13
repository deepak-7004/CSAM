'use strict';

const models = require('../models');
const { Sequelize } = require('sequelize');

module.exports = {
  up: async (queryInterface) => {
    const roles = {
      admin: [
        'browse_landing_page',
        'read_landing_page',
        'edit_landing_page',
        'add_landing_page',
        'delete_landing_page',
        'browse_good_reads',
        'read_good_reads',
        'edit_good_reads',
        'add_good_reads',
        'delete_good_reads',
      ],
      csam_admin: [
        'browse_landing_page',
        'read_landing_page',
        'edit_landing_page',
        'add_landing_page',
        'delete_landing_page',
        'browse_good_reads',
        'read_good_reads',
        'edit_good_reads',
        'add_good_reads',
        'delete_good_reads',
      ],
      user: [
        'browse_landing_page',
        'read_landing_page',
        'browse_good_reads',
        'read_good_reads',
      ],
    };

    const timestamp = Sequelize.literal('CURRENT_TIMESTAMP');

    for (let roleName in roles) {
      const role = await models.roles.findOne({ where: { name: roleName } });

      if (!role) {
        console.log(`Role not found: ${roleName}`);
        continue;
      }

      for (let permissionName of roles[roleName]) {
        const permission = await models.permissions.findOne({
          where: { key: permissionName },
        });

        if (!permission) {
          console.log(`Permission not found: ${permissionName}`);
          continue;
        }

        const existingPermissionRole = await models.permission_roles.findOne({
          where: { role_id: role.id, permission_id: permission.id },
        });

        if (!existingPermissionRole) {
          await queryInterface.bulkInsert('permission_roles', [
            {
              role_id: role.id,
              permission_id: permission.id,
              created_at: timestamp,
              updated_at: timestamp,
            },
          ]);
        }
      }
    }
  },
};
