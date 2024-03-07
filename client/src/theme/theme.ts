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

// Define the custom button style for .navLink
export const customButtonStyle = {
  fontFamily: 'Avantt',
  textTransform: 'capitalize',
  fontSize: '16px',
  padding: '8px 14px',
};

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
      '@media (max-width: 600px)': {
        fontSize: '18px', // Adjust the font size for smaller screens
      },
    },
    h2Bold: {
      // Add your h2Bold styles here if needed
    },
  } as ExtendedTypographyOptions,
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {},
  //       ...(customButtonStyle && { navLink: customButtonStyle }),
  //     },
  //   },
  // },

  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
            backgroundColor: '#000312',
          },
          listItem: {
            color: '#fff',
          },
        },
      },
    },
  },
});

export default theme;
