import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';

const itemData = [
  {
    img: './images_public/game1.png',
    title: 'Bed',
  },

  {
    img: './images_public/game4.png',
    title: 'Kitchen',
  },

  {
    img: './images_public/game3.png',
    title: 'Sink',
  },
  {
    img: './images_public/game2.png',
    title: 'Books',
  },
  {
    img: './images_public/game5.png',
    title: 'Blinds',
  },
  {
    img: './images_public/game6.png',
    title: 'Chairs',
  },
  {
    img: './images_public/game7.png',
    title: 'Laptop',
  },
  {
    img: './images_public/game8.png',
    title: 'Doors',
  },
  {
    img: './images_public/game9.png',
    title: 'Coffee',
  },
];

const MasonryImageList: React.FC = () => (
  <Box sx={{}}>
    <Typography className="common_title my-4" variant="commonTitle" component="h4">
      Time to flex your creativity
    </Typography>
    <ImageList
      variant="masonry"
      gap={20}
      sx={{ columnCount: { xs: '1 !important', sm: '2 !important', md: '3 !important' } }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);

export default MasonryImageList;
