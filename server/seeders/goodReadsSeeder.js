'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed data for 'good_reads' table
    await queryInterface.bulkInsert('good_reads', [
      {
        status: true,
        title: 'Good',
        sub_title: 'READS',
        banner_description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
        created_at: new Date(),
      },
    ]);

    // Seed data for 'good_reed_newsletter' table
    const newsletterSeedData = [
      {
        post_image: './images_public/news_card1.png',
        hover_icon: './images_public/arrowh.png',
        tag: 'Cloud Security',
        author: 'CSAM Team',
        title: 'Sugee: Loan Management System for Rural Sector.',
        publish_date: new Date('2023-03-11'),
        good_reads_id: 1,
      },
      {
        post_image: './images_public/news_card2.png',
        hover_icon: './images_public/arrowh.png',
        tag: 'Cloud Security',
        author: 'CSAM Team',
        title: 'Sugee: Loan Management System for Rural Sector.',
        publish_date: new Date('2023-03-11'),
        good_reads_id: 1,
      },
      {
        post_image: './images_public/news_card3.png',
        hover_icon: './images_public/arrowh.png',
        tag: 'Cloud Security',
        author: 'CSAM Team',
        title: 'Sugee: Loan Management System for Rural Sector.',
        publish_date: new Date('2023-03-11'),
        good_reads_id: 1,
      },
      {
        post_image: './images_public/news_card4.png',
        hover_icon: './images_public/arrowh.png',
        tag: 'Cloud Security',
        author: 'CSAM Team',
        title: 'Sugee: Loan Management System for Rural Sector.',
        publish_date: new Date('2023-03-11'),
        good_reads_id: 1,
      },
    ];

    await queryInterface.bulkInsert(
      'good_read_newsletter',
      newsletterSeedData,
      {},
    );

    const suggestedArticles = [
      {
        post_image: './images_public/article1.png',
        title: 'Sugee: Loan Management System for Rural Sector.',
        article_link: '/Goodreads',
        article_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris dolor sit amet, consectetur adipiscing...',
        good_reads_id: 1,
      },

      {
        post_image: './images_public/article2.png',
        title: 'Sugee: Loan Management System for Rural Sector.',
        article_link: '/Goodreads',
        article_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris dolor sit amet, consectetur adipiscing...',
        good_reads_id: 1,
      },

      {
        post_image: './images_public/article3.png',
        title: 'Sugee: Loan Management System for Rural Sector.',
        article_link: '/Goodreads',
        article_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris dolor sit amet, consectetur adipiscing...',
        good_reads_id: 1,
      },
    ];

    await queryInterface.bulkInsert(
      'good_read_suggested_articles',
      suggestedArticles,
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('good_reads', null, {});

    await queryInterface.bulkDelete('good_read_newsletter', null, {});
  },
};
