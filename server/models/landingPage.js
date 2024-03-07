'use strict';

module.exports = (sequelize, DataTypes) => {
  const LandingPage = sequelize.define(
    'LandingPage',
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
      background_type: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      year_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      background_video: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      background_image: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      homeContent: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'landing_page',
      timestamps: false,
    },
  );

  return LandingPage;
};
