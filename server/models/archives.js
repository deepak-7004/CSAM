// models/archives.js

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Archives = sequelize.define(
    'Archives',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      archive_names_id: {
        type: DataTypes.INTEGER,
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
      thumbnail_en: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      thumbnail_es: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      thumbnail_zh: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      thumbnail_pt: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      file_en: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      file_es: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      file_zh: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      file_pt: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: 'archives',
      timestamps: false,
    },
  );

  return Archives;
};
