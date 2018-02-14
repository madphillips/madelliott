import styled, { css } from "styled-components"
import { COLORS, FONTS } from "../constants";

const getColor = ({ color }) => COLORS[color] || color;

const BaseButton = ({ as: Component = "button", color, children, ...otherProps }) =>
  <Component {...otherProps}><span>{children}</span></Component>;

const size = ({ size }) => {
  switch (size) {
    case "small":
      return css`
        padding: 8px 32px;
      `;
    default:
      return css`
        padding: 12px 46px;
      `;
  }
}
  
const Button = styled(BaseButton)`
  position: relative;
  display: inline-block;
  color: ${props => props.variant === "solid" ? "#fff" : getColor(props)};
  font-size: 16px;
  font-family: ${FONTS.textSans};
  border: 2px solid ${getColor};
  cursor: pointer;
  transition-duration: 0.4s;
  transition-property: color, background, border-color;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  max-width: 200px;
  
  ${size};

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    transform: scaleX(${props => props.variant === "solid" ? 1 : 0});
    transform-origin: 50%;
    background: ${getColor};
    transition: 0.35s transform ease-out;
  }

  &:hover:not([disabled]) {
    color: #fff;
  }

  &:hover:not([disabled]):before {
    transform: scaleX(1);
  }

  &[disabled] {
    cursor: not-allowed;
    color: rgb(180, 180, 180);
    border-color: rgb(226, 226, 226);
    background: rgb(226, 226, 226);
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

export default Button;