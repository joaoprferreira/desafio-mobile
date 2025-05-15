import {DefaultTheme} from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#6200ee',
    primaryDark: '#3700b3',
    primaryLight: '#bb86fc',
    secondary: '#03dac6',
    secondaryDark: '#018786',
    error: '#b00020',
    background: '#ffffff',
    surface: '#ffffff',
    text: '#000000',
    disabled: 'rgba(0, 0, 0, 0.26)',
    placeholder: 'rgba(0, 0, 0, 0.54)',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    onSurface: '#000000',
    gray: '#cccccc',
  },

  textVariants: {
    header: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
    },
    caption: {
      fontSize: 12,
    },
  },
};
