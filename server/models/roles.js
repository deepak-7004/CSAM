'use strict';

module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      display_name: {
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
      tableName: 'roles',
      timestamps: false,
    },
  );
  Role.associate = (models) => {
    setImmediate(() => {
      const { Permission, PermissionRole } = models;
      Role.belongsToMany(Permission, {
        through: PermissionRole,
        foreignKey: 'role_id',
      });
    });
  };

  return Role;
};
