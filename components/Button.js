import styled from "styled-components"
import { COLORS, FONTS } from "../constants";

const getColor = ({ color }) => COLORS[color] || color;

const BaseButton = ({ as: Component = "button", color, children, ...otherProps }) =>
  <Component {...otherProps}><span>{children}</span></Component>;

const Button = styled(BaseButton)`
  position: relative;
  display: inline-block;
  color: ${getColor};
  font-size: 16px;
  font-family: ${FONTS.textSans};
  border: 2px solid ${getColor};
  padding: 12px 46px;
  cursor: pointer;
  transition: 0.4s color;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    transform: scaleX(0);
    transform-origin: 50%;
    background: ${getColor};
    transition: 0.35s transform ease-out;
  }

  &:hover {
    color: #fff;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

export default Button;