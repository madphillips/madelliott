import styled, { css } from "styled-components";
import { FONTS, COLORS } from "../constants";

export const fontFamily = ({ fontFamily, fontSize }) => {
  let styles = { fontFamily: FONTS[fontFamily] };

  if (fontFamily === "textSerif" && fontSize < 18) {
    styles.letterSpacing = "0.5px";
  }

  return styles;
};

export const fontSize = ({ fontSize }) => {
  if (typeof fontSize === "number") return `${fontSize}px`;
  return fontSize;
};

export const P = styled.p`
  ${fontFamily};
  font-size: ${fontSize};
  line-height: 1.5;
  font-weight: 300;
`;

P.defaultProps = {
  fontFamily: "textSans",
  fontSize: 16
};

export const Link = styled.a`
  color: ${COLORS.green};
`