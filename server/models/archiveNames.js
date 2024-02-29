// models/archiveName.js

"use strict";

module.exports = (sequelize, DataTypes) => {
  const ArchiveName = sequelize.define(
    "ArchiveName",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
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
      tableName: "archive_names",
      timestamps: false,
    }
  );

  return ArchiveName;
};
