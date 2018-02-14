import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt
} from "@fortawesome/fontawesome-free-regular";
import {
  faUsers,
  faCameraRetro,
  faGlassMartini,
  faCar,
  faGift,
  faEnvelope
} from "@fortawesome/fontawesome-free-solid";

// Add your imported icons here
fontawesome.library.add(
  faCalendarAlt,
  faUsers,
  faCameraRetro,
  faGlassMartini,
  faCar,
  faGift,
  faEnvelope
);

const Icon = props => <FontAwesomeIcon {...props} />;

export default Icon;