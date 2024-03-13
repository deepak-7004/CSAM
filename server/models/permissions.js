'use strict';

module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    'Permission',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      key: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      table_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
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
      tableName: 'permissions',
      timestamps: false,
    },
  );
  Permission.associate = (models) => {
    setImmediate(() => {
      const { Role, PermissionRole } = models;
      Permission.belongsToMany(Role, {
        through: PermissionRole,
        foreignKey: 'permission_id',
      });
    });
  };

  return Permission;
};
