module.exports = (models) => {
  models.Role.belongsToMany(models.Permission, {
    through: models.PermissionRole,
    foreignKey: 'roleId',
  });
  models.Permission.belongsToMany(models.Role, {
    through: models.PermissionRole,
    foreignKey: 'permissionId',
  });
};
