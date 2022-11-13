type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type IColor = RGB | RGBA | HEX;
export interface ITheme {
  colors: {
    primary: IColor;
    secondary: IColor;
    lightGrey: IColor;
    darkGrey: IColor;
    white: IColor;
    black: IColor;
    error: IColor;
    success: IColor;
  };
}

export interface IStyledTheme {
  theme: ITheme;
}

export const theme: ITheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ff0070",
    lightGrey: "#f5f5f5",
    darkGrey: "#333",
    white: "#fff",
    black: "#000",
    error: "#ff6347",
    success: "#00ff7f",
  },
};
