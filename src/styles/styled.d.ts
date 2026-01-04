// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textMuted: string;
      danger: string;
    };

    spacing: (value: number) => string;

    radius: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
