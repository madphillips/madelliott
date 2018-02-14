import React from 'react';
import styled, { injectGlobal } from "styled-components";
import { COLORS, FONTS, HEADERSIZE } from '../constants';
import { P } from "./Text";
import Anchor from "./Anchor";
import Icon from "./Icon";
import {Flex, Box} from 'grid-styled';

const FaqsWrapper = styled.div`
  padding: 5em 0 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid ${COLORS.gray};
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.15);

  h2 {
    color: ${COLORS.darkgreen};
    text-align: center;
    margin: 0 auto 2em auto;
    padding: 0;
  }
`;

const FlexContainer = styled(Flex)`
  margin: ${props => [props.margin || "2em 4em"]};
`;

const Col = styled(Box)`
`;

const FaqQuestions = styled(Box)`
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

  img {
    max-width: 40px;
    max-height: 40px;
    display: block;
    margin: 10px auto;
  }
  span {
    margin: auto;
    text-transform: uppercase;
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

  render() {
    return (
      <FaqsWrapper>
        <Anchor id="faqs" title="Frequently Asked Questions" />
        <h2>Have Questions? Hopefully We Have Your Answer!</h2>
        <FlexContainer wrap="wrap" justify="center">
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="ceremony">
              <Icon icon={["far", "calendar-alt"]} />
              <span>Ceremony Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="guest">
              <Icon icon="users" />
              <span>Guest Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="media">
              <Icon icon="camera-retro" />
              <span>Media Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="food">
              <Icon icon="glass-martini" />
              <span>Food &amp; Drink Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="transportation">
              <Icon icon="car" />
              <span>Transportation Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="registry">
              <Icon icon="gift" />
              <span>Registry Questions</span>
            </FaqSectionTitle>
          </Col>
          <Col w={[1/2, 1/3, 1/4 ]}>
            <FaqSectionTitle onClick={this.handleSectionClick} data-section="contact">
              <Icon icon="envelope" />
              <span>Contact Us</span>
            </FaqSectionTitle>
          </Col>
        </FlexContainer>
        <FlexContainer>
          {this.state.section === "ceremony" && (
            <FaqQuestions>
              <ul>
                <li>
                  <p><span> Where is the ceremony/reception taking place?</span>
                    The Mill at Fine Creek is a scenic 10 acre wedding-only venue in Powhatan County, Virginia. Their address is 2434 Robert E Lee Road, Powhatan, VA 23139 and their website is http://www.themillatfinecreek.com
                  </p>
                </li>
                <li>
                  <p><span> Will the ceremony or the reception take place outdoors?</span>
                    The ceremony will be weather-permitting outdoors and the reception will be indoors. Of course, we are not going to insist on an outdoor ceremony is it is raining, snowing, or otherwise uncomfortable.
                  </p>
                </li>
                <li>
                  <p><span> How do I get there?</span>
                    <span>Coming from Charlottesville?</span> I recommend taking 64E and taking the exit 159 onto route 522S. At Jefferson, take a left onto route 711 eastbound. In about 5 miles, the Mill at Fine Creek will be on your left, immediately after crossing a small bridge.</p>
                  <p><span>Coming from Richmond?</span> Take 64W or Patterson Avenue westbound, take the exit for 288S, after crossing the James River bridge, take the first exit and take a right onto 711 westbound. In about 8 miles, the Mill at Fine Creek will be on your right- you should see the cottages through some trees on the right side.
                  </p>
                </li>
                <li>
                  <p><span> What time should we arrive?</span>
                  We ask that you arrive at least 15 minutes before the ceremony to take your seats and make your initial greetings. The ceremony will begin promptly at 6:00pm. If you are running late, we ask that you please watch from the balcony above or do your best impression of Tom Cruise in Mission Impossible as you approach your seat.
                  </p>
                </li>
                <li>
                  <p><span> Do you have a timeline? What should I do between the ceremony and the reception?</span>
                  We do not yet have an official timeline for the full event; however, we do know that there will be non-alcoholic drinks served leading up to the ceremony and immediately following the ceremony there will be an indoor cocktail hour with light hors d’oeuvres leading up to an amazing buffet and open bar, tear-jerking speeches, and a fun night of dancing!
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
                  The dress code is semi-formal. We understand that the weather in Virginia in March is unpredictable, so we also suggest you prepare accordingly, for example an extra layer in case it’s a little brisk. When the music breaks out, we are okay with more casual shoes if you want to be free to bust a move!
                  </p>
                </li>
                <li>
                  <p><span> Are there any colors we should avoid wearing?</span>
                  The groomsmen will be wearing pale blue ties and the bridesmaids will be wearing sage green. We would prefer you try not to match our bridal party, but we also understand those colors look great on many people! Send us a picture of what you have in mind and we’ll let you know how we feel! Ladies- please no white. Men- let’s see your best white dresses!
                  </p>
                </li>
                <li>
                  <p><span> Can I bring a date? </span>
                  We are okay with plus ones! All we ask is that you know each other fairly well in advance- there is no need to put the pressure of attending a wedding on a new relationship!
                  </p>
                </li>
                <li>
                  <p><span> Are kids welcome?</span>
                  We know many of our guests have children and they are welcome to attend! We ask that when you RSVP you let us know if any of your children are coming and their ages. Already RSVP’d? No worries! Send us an email and let us know. We can arrange for kid-friendly foods if they haven’t developed their parents’ sophisticated palates and child care services if the parents need to take 5, just let us know by March 9th!
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
                  We want to spend the entire evening with our closest friends and family fully present! We are also quite shy and have hired a professional whose job is to document this day for us. For these reasons, our wedding ceremony is unplugged. We ask that you keep all recording devices and cell phones in your pockets and bags for the entirely of the ceremony. Afterwards, feel free to catch up on your social media, emails, and snap pics! Extra points if you share your photos and videos with us!!
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
                  Absolutely! There will be refreshments leading up to the ceremony while guests arrive, hors d’oeuvres during a cocktail hour, then an amazing buffet and open bar!
                  </p>
                </li>
                <li>
                  <p><span> What kind of food will be served? </span>
                  We have arranged for the Mill’s caterer to make a range of food from our heritages, including Southern, Cuban, and Korean! We assure you there will be something for everyone to love!
                  </p>
                </li>
                <li>
                  <p><span> What if I have a food allergy? </span>
                  Let us know in the comments section when you RSVP! We can make arrangements to accommodate it! Already RSVP’d? No worries! Send us an email and let us know! We can adjust for this up until March 9th.
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
                  Unfortunately, no, we will not be providing any transportation to or from the venue. Please make arrangements amongst yourselves to ensure your safe arrival and departure, especially if you plan to enjoy the open bar! Some options include electing a designated driver or to call an Uber or a Lyft.
                  </p>
                </li>
                <li>
                  <p><span> Will parking be available? </span>
                  The Mill at Fine Creek has free parking in spades! They have a large lot right in from of the venue, just steps away from the front door and the ceremony site.
                  </p>
                </li>
                <li>
                  <p><span> Is the ceremony and reception location wheelchair/walker accessible? </span>
                  The ceremony site isn’t fully wheelchair/walker, but with the help of a couple strong ushers the trek down just a couple stairs can be made easily! There is also a balcony with easy access and a great view of the ceremony site. The reception site is completely wheelchair/walker friendly! Manuverability should be a snap and there are large ADA compliant bathroom stalls! Additionally, there are two handicap parking spaces right at the entrance of the building- which places them besides both the ceremony and reception sites.
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
                  We will be leaving over the weekend for our week long honeymoon. We are going to split our time between Asheville, North Carolina and Charleston, South Carolina!
                  </p>
                </li>
                <li>
                  <p><span> I would prefer to donate towards your favorite charity or the honeymoon fund. </span>
                  That is an amazing thought and we really appreciate it! For either of these options, bring it with you to the wedding and hand it to the best man. Our favorite charity is BREW Beagle Rescue, which we give numerous thanks for finding and rescuing our little beagle. BREW has a history in our family of saving and introducing us some of the most wonderful, loving members of our family.
                  </p>
                </li>
                <li>
                  <p><span> Should I bring your gift to the wedding? </span>
                  We would prefer gifts be mailed to us at our home address, which is currently 3600 W Broad Street, Unit 203, Richmond, VA 23230. If you are uncomfortable with shipping your gift, you may bring it to the wedding and there will be a space available for you to place it. The only exceptions are monetary gifts, which should be left with the best man.
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
                  We would LOVE to share their contact information with you! Love the venue and catering? Contact The Mill at Fine Creek at themill@themillatfinecreek.com. Was the signature cocktail lip smacking delicious? Email Brian Artis at Brian.L.Artis@gmail.com. For beautiful pictures, email Michelle Chu at hello@michellechu.com. For delicious cakes, email Pierre Tocco and pierretocco@yahoo.com. For music that will keep you on the dance floor all night email Black Tie Entertainment and request Chase at MusicDJ.Com! For a snazzy suit, check out TheBlackTux.Com. Was the hair and make up on point? Let Jenn know at JenniferSaundersBridal.Com! Love your tasty favor, the wonderfully arranged flowers, and the overall decor? Email us here!! 
                  </p>
                </li>
                <li>
                  <p><span> How do I contact you if I have other questions? </span>
                  Drop us a line at info@maddieandelliott.com!
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