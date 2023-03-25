import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, grey, red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            light: '#28282a',
            main: '#28282a',
            dark: '#222des',
        },
        warning: {
            light: '#fff5f8',
            main: '#ff3366',
            dark: '#e62958',
        },
        secondary: {
            // main: '#ffc071',
            // dark: '#ffb25e',
            main: '#35c071',
            // dark: '#ffb25e',

        },
        error: {
            light: red[50],
            main: red[500],
            dark: red[700],
        },
        success: {
            light: green[50],
            main: green[500],
            dark: green[700],
        },
    },
    typography: {
        fontFamily: "'Ubuntu' sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
    },
     breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});




export default theme;