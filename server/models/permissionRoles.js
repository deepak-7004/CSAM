'use strict';

module.exports = (sequelize, DataTypes) => {
  const PermissionRole = sequelize.define(
    'PermissionRole',
    {
      permission_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      role_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'permission_roles',
      timestamps: false,
    },
  );

  return PermissionRole;
};
