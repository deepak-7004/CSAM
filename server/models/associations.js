module.exports = (models) => {
  models.User.belongsTo(models.Role, {
    foreignKey: 'role_id',
  });

  models.Role.hasMany(models.User, {
    foreignKey: 'role_id',
  });

  models.Role.belongsToMany(models.Permission, {
    through: models.PermissionRole,
    foreignKey: 'role_id',
  });

  models.Permission.belongsToMany(models.Role, {
    through: models.PermissionRole,
    foreignKey: 'permission_id',
  });
};
