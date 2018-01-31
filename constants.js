export const COLORS = {
  gray: "rgb(242, 242, 242)",
  darkgray: "rgb(89,89,89)",
  green: "rgb(157,169,147)",
  darkgreen: "rgb(91, 102, 82)",
  pink: "rgb(231, 162, 183)",
  blue: "rgb(179,205,228)"
};

const baseFonts = '"Helvetica Neue", Arial, sans-serif';

export const FONTS = {
  display: `"Gotham A", "Gotham B", ${baseFonts}`,
  text: `"Gotham SSm A", "Gotham SSm B", ${baseFonts}`
};

FONTS.sans = FONTS.text;
FONTS.serif = FONTS.display;
