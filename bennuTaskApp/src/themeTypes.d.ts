import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      primaryLight: string;
      secondary: string;
      secondaryDark: string;
      error: string;
      background: string;
      surface: string;
      text: string;
      disabled: string;
      placeholder: string;
      backdrop: string;
      onSurface: string;
      // gray: string;
      [key: string]: string;
    };

    textVariants: {
      header: {
        fontSize: number;
        fontWeight: string;
      };
      body: {
        fontSize: number;
      };
      caption: {
        fontSize: number;
      };
    };
  }
}
