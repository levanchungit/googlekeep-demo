import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h1: {
            fontFamily: 'Roboto',
            fontSize: '500px',
            fontWeight: 700,
        },
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        h6: {},
    },
    palette: {
        primary: {
            main: '#FF0099',
        },
        light: {
            blue: '#AECBFA',
            red: '#F28B82',
            cyan: '#A7FFEB',
            brown: '#E6C9A8',
            gray: '#E8EAED',
        },
        dark: {
            blue: '#1E3A5F',
            red: '#5C2B29',
            cyan: '#16504B',
            brown: '#442F19',
            gray: '#3C3F43',
        },
        black: '#000000',
        white: '#FFFFFF'
    },

    // Other theme configuration options...
});

export default theme;
