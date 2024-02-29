// models/badge.js

"use strict";

module.exports = (sequelize, DataTypes) => {
  const Badge = sequelize.define(
    "Badge",
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      badge_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      date: {
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
      icon_faded: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
      },
      icon_original: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
      },
    },
    {
      tableName: "badges",
      timestamps: false,
    }
  );

  return Badge;
};
