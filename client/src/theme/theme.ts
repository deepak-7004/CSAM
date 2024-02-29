/* eslint-disable prettier/prettier */
import { createTheme } from '@mui/material/styles';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import * as React from 'react';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    commonTitle: true;
  }
} 

declare module '@mui/material/styles' {
  interface Theme {
    typography: TypographyOptions & {
      commonTitle: React.CSSProperties & {
        '@media (max-width: 600px)': React.CSSProperties;
      };
    };
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  commonTitle: React.CSSProperties;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#e4b131',
    },
    secondary: {
      main: '#222',
    },
  },

  typography: {
    commonTitle: {
      color: '#E1E1E1',
      fontSize: '25px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
      textTransform: 'capitalize',
      // maxWidth: '30%',
      width: 'fit-content',
      position: 'relative',
      textAlign: 'center',
      margin: '0 auto',
    },
    h2Bold: {
      // Add your h2Bold styles here if needed
    },
    
  } as ExtendedTypographyOptions,

});


theme.typography.commonTitle = {
  ...theme.typography.commonTitle,
  '@media (max-width: 600px)': {
    fontSize: '18px', // Adjust the font size for smaller screens
  },
};

export default theme;
