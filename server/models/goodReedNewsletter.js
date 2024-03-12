'use strict';

module.exports = (sequelize, DataTypes) => {
  const goodReadNewsletter = sequelize.define(
    'goodReadNewsletter',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      post_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      hover_icon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tag: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      author: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      publish_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      good_reads_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'good_reads',
          key: 'id',
        },
      },
    },
    {
      tableName: 'good_read_newsletter',
      timestamps: false,
    },
  );

  goodReadNewsletter.associate = (models) => {
    goodReadNewsletter.belongsTo(models.goodReads, {
      foreignKey: 'good_reads_id',
    });   
  };

  return goodReadNewsletter;
};
