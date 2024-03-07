'use strict';

module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define(
    'Banner',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      banner_for: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      image_en: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      image_es: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      image_za: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
      image_pt: {
        type: DataTypes.STRING(1024),
        allowNull: true,
      },
    },
    {
      tableName: 'banners',
      timestamps: false,
    },
  );

  return Banner;
};
