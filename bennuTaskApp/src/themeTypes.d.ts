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
    };
    spacing: {
      s: number;
      m: number;
      l: number;
      xl: number;
    };
    borderRadius: {
      s: number;
      m: number;
      l: number;
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
