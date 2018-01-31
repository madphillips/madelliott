import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';

const PhotosWrapper = styled.div`
  padding: 3em 0 0 0;

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: 0;
  }
`;
const Rotator = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Photos = () => (
  <PhotosWrapper id="photos">
    <h2>Photos</h2>
    <Rotator>
      <p>Images go here w/ arrows to scroll</p>
    </Rotator>
  </PhotosWrapper>
)

export default Photos