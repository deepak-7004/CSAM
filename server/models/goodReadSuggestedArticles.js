'use strict';

module.exports = (sequelize, DataTypes) => {
  const goodReadSuggestedArticles = sequelize.define(
    'suggestedArticles',
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
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      article_description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      article_link: {
        type: DataTypes.STRING,
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
      tableName: 'good_read_suggested_articles',
      timestamps: false,
    },
  );

  goodReadSuggestedArticles.associate = (models) => {
    goodReadSuggestedArticles.belongsTo(models.goodReads, {
      foreignKey: 'good_reads_id',
    });   
  };

  return goodReadSuggestedArticles;
};
