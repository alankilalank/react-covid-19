import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      background: string;
      backgroundLight: string;
      text: string;
      textLight: string;
      warning: string;
      success: string;
      danger: string;
    };
  }
}
