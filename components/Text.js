import styled from "styled-components";
import { FONTS, COLORS } from "../constants";

export const P = styled.p`
  font-family: ${FONTS.textSans};
  font-size: 18px;
  line-height: 1.4;
  font-weight: 300;
`;

export const Link = styled.a`
  color: ${COLORS.green};
`