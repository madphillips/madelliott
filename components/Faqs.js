import React from 'react';
import styled, { css } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import { P } from "./Text";
import Anchor from "./Anchor";
import Icon from "./Icon";
import {Flex, Box} from 'grid-styled';

const SECTIONS = {
  "ceremony": {
    title: "Ceremony Questions",
    icon: ["far", "calendar-alt"]
  },
  "guest": {
    title: "Guest Questions",
    icon: "users"
  },
  "media": {
    title: "Media Questions",
    icon: "camera-retro"
  },
  "food": {
    title: "Food & Drink Questions",
    icon: "glass-martini"
  },
  "transportation": {
    title: "Transportation Questions",
    icon: "car"
  },
  "registry": {
    title: "Registry Questions",
    icon: "gift"
  },
  "contact": {
    title: "Contact Questions",
    icon: "envelope"
  }
};

const FaqsWrapper = styled.div`
  padding: 5em 0 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  h2 {
    color: ${COLORS.green};
    text-align: center;
    margin: 0 auto 2em auto;
    padding: 0;
  }
`;

const FlexContainer = styled(Flex)`
  margin: ${props => [props.margin || "1em 4em"]};
`;

const Col = styled(Box)`
`;

const FaqQuestions = styled(Box)`
  a {
    text-decoration: none;
    color: ${COLORS.darkgreen};
    font-weight: bold;

    &:hover {
      color: ${COLORS.green};
    }
  }

  li {
    margin: 30px 0;
  }

  span {
    color: ${COLORS.green};
    font-weight: bold;
    display: block;
    margin-bottom: 10px;
  }
`;

const FaqSectionTitle = styled.div`
  cursor: pointer;
  text-align: center;
  margin: 12px 24px;
  transition: color 0.2s;

  ${props => props.active && css`
    color: ${COLORS.green};
  `};

  &:hover {
    color: ${COLORS.green};
  }

  svg {
    display: block;
    min-width: 36px;
    min-height: 36px;
    margin: 10px auto;
  }

  span {
    margin: auto;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

class Faqs extends React.Component {
  constructor(props) {
    super(props);
    this.handleSectionClick = this.handleSectionClick.bind(this);
    this.state = {
      section: null
    }
  }

  handleSectionClick(e) {
    const { currentTarget: target } = e;
    if (target && target.dataset && target.dataset.section) {
      this.setState({
        section: target.dataset.section
      });
    }
  }

  renderButtons() {
    return Object.keys(SECTIONS).map(sectionKey => {
      const section = SECTIONS[sectionKey];
      return (
        <Col w={[1/2, 1/3, 1/4 ]}>
          <FaqSectionTitle 
            data-section={sectionKey}
            onClick={this.handleSectionClick}
            active={this.state.section === sectionKey}
          >
            <Icon icon={section.icon} />
            <span>{section.title}</span>
          </FaqSectionTitle>
        </Col>
      );
    });
  }

  render() {
    return (
      <FaqsWrapper>
        <Anchor id="faqs" title="Frequently Asked Questions" />
        <h2>Have Questions? Hopefully We Already Have Your Answer!</h2>
        <FlexContainer wrap="wrap" justify="center">
          {this.renderButtons()}
        </FlexContainer>
        <FlexContainer>
          {this.state.section === "ceremony" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span> Where is the ceremony/reception taking place?</span>
                  The ceremony and reception will take place at The Mill at Fine Creek, a scenic and historic 10 acre wedding-only venue located in Powhatan County. The Mill's address is 2434 Robert E Lee Road, Powhatan, VA 23139 and their website is <a href="http://www.themillatfinecreek.com" target="_blank">here</a>.
                  </p>
                </li>
                <li>
                  <p><span> Will the ceremony or the reception take place outdoors?</span>
                  Weather-permitting, the ceremony will be held outdoors and the reception will follow indoors. In the event that it rains or snows, we will move the ceremony indoors.
                  </p>
                </li>
                <li>
                  <p><span> How do I get there?</span>
                    <span>Coming from Charlottesville?</span> We recommend taking 64E to exit 159 onto Route 522S. At Jefferson, take a left onto Route 711 eastbound. In about 5 miles, the Mill at Fine Creek will be on your left, immediately after crossing a small bridge.</p>
                  <p><span>Coming from Richmond?</span> Take 64W or Patterson Avenue westbound, take the exit for 288S, after crossing the James River bridge, take the first exit (Hugenuot Trail Road) and take a right onto 711 westbound. In about 8 miles, the Mill at Fine Creek will be on your right — you should see the cottages through the trees on the right side.
                  </p>
                </li>
                <li>
                  <p><span> What time should we arrive?</span>
                  We ask that you arrive at least 15 minutes before the ceremony to get seated and greet your friends. The ceremony will begin promptly at 6:00pm. If you are running late, we ask that you please watch from the balcony, unless you plan to Tom Cruise-it, Mission Impossible-style into your seat.
                  </p>
                </li>
                <li>
                  <p><span> Do you have a timeline? What should I do between the ceremony and the reception?</span>
                  We don’t have an official timeline for the full event. However, we do know that there will be non-alcoholic refreshments served leading up to the ceremony. Immediately following the ceremony we will gather for an indoor cocktail hour with light hors d’oeuvres, and then we’ll be enjoying an amazing buffet and open bar, tear-jerking speeches, and a fun night of dancing!
                  </p>
                </li>
              </ul>
            </FaqQuestions>
          )}
          {this.state.section === "guest" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span>Is there a dress code?</span>
                  The dress code is semi-formal. We know that the weather in Virginia in March is unpredictable, so we also suggest you bring an extra layer in case it’s a little brisk. When the dance music starts, feel free to slip on your boogie shoes so you can bust a move!
                  </p>
                </li>
                <li>
                  <p><span> Can I bring a date? </span>
                  We are okay with plus ones! All we ask is that you know each other fairly well — there's no need to put the pressure of attending a wedding on a new relationship!
                  </p>
                </li>
                <li>
                  <p><span> Are kids welcome?</span>
                  We know many of our guests have children and they are welcome to attend! When you RSVP, please let us know if any of your children are coming and their ages. Already RSVP’d? No worries! Send us an email and let us know. We can arrange for kid-friendly foods if they haven’t yet developed their parents’ discerning and sophisticated palates! We can also arrange back-up child care services if the parents need to take 5. Just let us know by March 9th!
                  </p>
                </li>

              </ul>
            </FaqQuestions>
          )}
          {this.state.section === "media" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span> Can I take pictures? </span>
                  Our wish is to spend the entire evening with our closest friends and family fully present! We're also quite shy and have hired a professional whose job is to document this day for us. For these reasons, our wedding ceremony is unplugged. We ask that you keep all recording devices and cell phones in your pockets and bags for the duration of the ceremony. Afterwards, feel free to catch up on your social media, emails, and snap pics! Extra points if you share your photos and videos with us!!
                  </p>
                </li>
              </ul>
            </FaqQuestions>
          )}
          {this.state.section === "food" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span> Will there be food and drinks served? </span>
                  Absolutely! As you arrive, there will be refreshments leading up to the ceremony, hors d’oeuvres during our cocktail hour, and then an amazing buffet and open bar!
                  </p>
                </li>
                <li>
                  <p><span> What kind of food will be served? </span>
                  We have arranged for The Mill’s caterer to make a range of foods that reflect our cultural heritages, including Southern, Cuban, and Korean! Our hope is that there will be something for everyone to love!
                  </p>
                </li>
                <li>
                  <p><span> What if I have a food allergy? </span>
                  Let us know in the comments section when you RSVP and we can make arrangements to accommodate it! Already RSVP’d? No worries! Send us an email and let us know! We can make adjustments until March 9th.
                  </p>
                </li>
              </ul>
            </FaqQuestions>
          )}
          {this.state.section === "transportation" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span> Will any transportation be provided? </span>
                  Unfortunately, no, we will not be providing any transportation to or from the venue. Please make arrangements to ensure your safe arrival and departure, especially if you plan to enjoy the open bar. You may want to have a designated driver or have Uber or Lyft on stand-by.
                  </p>
                </li>
                <li>
                  <p><span> Will parking be available? </span>
                  The Mill at Fine Creek has free parking in spades! They have a large lot right in from of the venue, just steps away from the front door and the ceremony site.
                  </p>
                </li>
                <li>
                  <p><span> Is the ceremony and reception location wheelchair/walker accessible? </span>
                  The ceremony site isn’t fully wheelchair/walker accessible, but with the help of a couple of strong ushers, the trek down a few stairs can be made easily! There is also an easily-accessible balcony with a great view of the ceremony site. The reception site is completely wheelchair/walker friendly! Maneuverability should be a snap and the venue offers large ADA compliant bathrooms. Additionally, there are two handicap parking spaces right at the entrance of the building — which places them besides both the ceremony and reception sites.
                  </p>
                </li>
              </ul>
            </FaqQuestions>
          )}
          {this.state.section === "registry" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span> Where are you honeymooning? </span>
                  We will be leaving about a week after the wedding for our week-long honeymoon. We are going to split our time between Asheville, North Carolina and Charleston, South Carolina!
                  </p>
                </li>
                <li>
                  <p><span> I would prefer to donate towards your favorite charity or the honeymoon fund. </span>
                  That's an amazing thought and we really appreciate it! For either of these options, our best man will be available to collect those donations. Our favorite charity is BREW Beagle Rescue, to which we give many thanks for finding and rescuing our little beagle, Citra. BREW has a history in our family of saving and introducing us to some of the most wonderful and loving four-legged members of our family.
                  </p>
                </li>
                <li>
                  <p><span> Should I bring your gift to the wedding? </span>
                  We would prefer gifts be mailed to us at our home address, which is currently 3600 W Broad Street, Unit 203, Richmond, VA 23230. If you prefer bringing it to the wedding, there will be a gift table available. The only exceptions are monetary gifts, which should be left with the best man.
                  </p>
                </li>
              </ul>
            </FaqQuestions>
          )}
          {this.state.section === "contact" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span> We love the vendors you hired, could you please give me their contact information? </span>
                  We would LOVE to share their contact information with you! Love the venue and catering? Send The Mill at 
                  Fine Creek an <a href="mailto:themill@themillatfinecreek.com">email</a>! Was the signature cocktail lip-smacking 
                  delicious? Let <a href="mailto:Brian.L.Artis@gmail.com">Brian Artis</a> know! For beautiful pictures, email <a hre="mailto:hello@michellechu.com">Michelle Chu</a>!
                  For delicious cakes, drop a line to <a hre="mailto:pierretocco@yahoo.com">Pierre Tocco</a>! For music that will keep you on the dance floor all
                  night, visit Black Tie Entertainment's <a href="http://www.MusicDJ.Com" target="_blank">website</a> and request Chase! For a snazzy suit, check out <a href="http://www.TheBlackTux.Com" target="_blank">TheBlackTux.Com</a>. Was the hair and make up on point? Visit Jenn's <a href="http://www.JenniferSaundersBridal.Com" target="_blank">website</a>! Love the tasty favors, the wonderfully arranged flowers, and
                  the overall decor? Email us <a href="mailto:info@maddieandelliott.com">here</a>!!
                  </p>
                </li>
                <li>
                  <p><span> How do I contact you if I have other questions? </span>
                  <a href="mailto:info@maddieandelliott.com">Drop us a line here!</a>
                  </p>
                </li>
              </ul>
            </FaqQuestions>
          )}
        </FlexContainer>
      </FaqsWrapper>
    )
  }
}

export default Faqs