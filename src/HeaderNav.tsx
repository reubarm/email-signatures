import React from 'react';
import { 
  Background, Wrapper, Logo, EqualsLogoDark, SlackInfo
} from './Components'

const HeaderNav = () => {
  return (
    <Background>
      <Wrapper>
          <Logo src={EqualsLogoDark} />
          <SlackInfo href="https://slack.com/app_redirect?channel=email-signatures">Need help? Visit <strong>#email-signatures</strong> in slack</SlackInfo>
      </Wrapper>
    </Background>
  );
};

export default HeaderNav;
