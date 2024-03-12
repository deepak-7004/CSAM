'use strict';

module.exports = (sequelize, DataTypes) => {
  const goodReads = sequelize.define(
    'goodReads',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      sub_title: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      banner_description: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'good_reads',
      timestamps: false,
    },
  );

  return goodReads;
};
