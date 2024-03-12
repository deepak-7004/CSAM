'use strict';

module.exports = {
  up: async (queryInterface) => {
    const homeContent = {
      heading: 'CYBER SECURITY AWARENESS MONTH',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi.',
      cards: [
        {
          title: 'Theme of the month',
          image: 'home_img1.png',
          hoveredImage: 'wallpaper_1.svg',
          link: '/Monthbanner',
          status: 'active',
          cardStyle: {
            className: 'cardfirst',
          },
        },
        {
          title: 'Games & Contest',
          image: 'home_img2.png',
          hoveredImage: 'game.png',
          link: '/Gamecontests',
          status: 'active',
          cardStyle: {
            className: 'cardsecond',
          },
        },
        {
          title: 'Good Reads',
          image: 'home_img3.png',
          hoveredImage: 'read.png',
          link: '/Goodreads',
          status: 'active',
          cardStyle: {
            className: 'cardthird',
          },
        },
        {
          title: 'Leaderboard',
          image: 'home_img4.png',
          hoveredImage: 'leaderbord.png',
          link: '/Leaderboard',
          status: 'active',
          cardStyle: {
            className: 'cardfourth',
          },
        },
        {
          title: 'GISP & OTHER Resources',
          image: 'toolsResources.png',
          hoveredImage: 'leaderbord.png',
          link: '/Toolsresources',
          status: 'active',
          cardStyle: {
            className: 'cardfourth',
          },
        },
      ],
    };

    await queryInterface.bulkInsert(
      'landing_page',
      [
        {
          name: 'Example Landing Page',
          background_type: true,
          status: true,
          year_id: 1,
          background_video: 'example_video.mp4',
          background_image: '',
          homeContent: JSON.stringify(homeContent),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('landing_page', null, {});
  },
};
