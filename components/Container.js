import styled from "styled-components";
import { Box, Flex } from "grid-styled";

const Container = styled(Flex)`
  max-width: 1120px;
`;

Container.defaultProps = {
  mx: "auto",
  px: 3,
  wrap: true
};

export const BoxContainer = Container.withComponent(Box);

BoxContainer.defaultProps = {
  mx: "auto",
  px: 3,
  wrap: true
};

export default Container;