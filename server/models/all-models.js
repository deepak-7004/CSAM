'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activities', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      activity_name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    await queryInterface.createTable('archive_names', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });

    await queryInterface.createTable('archives', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      archive_names_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      thumbnail_en: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      thumbnail_es: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      thumbnail_zh: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      thumbnail_pt: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      file_en: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      file_es: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      file_zh: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      file_pt: {
        type: Sequelize.STRING(255),
        allowNull: true
      }
    });

    await queryInterface.createTable('badges', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      badge_title: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      date: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      icon_faded: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      icon_original: {
        type: Sequelize.STRING(255),
        allowNull: true
      }
    });

    await queryInterface.createTable('banners', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      banner_for: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      image_en: {
        type: Sequelize.STRING(1024),
        allowNull: true
      },
      image_es: {
        type: Sequelize.STRING(1024),
        allowNull: true
      },
      image_za: {
        type: Sequelize.STRING(1024),
        allowNull: true
      },
      image_pt: {
        type: Sequelize.STRING(1024),
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activities');
    await queryInterface.dropTable('archive_names');
    await queryInterface.dropTable('archives');
    await queryInterface.dropTable('badges');
    await queryInterface.dropTable('banners');
  }
};