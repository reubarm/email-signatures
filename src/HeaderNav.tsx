import React from 'react';
import styled from 'styled-components';

const EqualsLogo = "https://cdn.fairfx.com/images/group-email-signature/equals-dark.png"

const Background = styled.div`
  background-color: #343a40!important;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
align-self: center;
justify-content: space-between;
  height: 70px;
  max-width: 1140px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 35px;
`;

const SlackInfo = styled.a`
  cursor: pointer;
  position: relative;
  color: white!important;
  padding: 0 0.75rem;
  transition: all 0.3s;
  text-decoration: none;
  margin-left; auto;
  float: right;

  :hover {
    color: white!important;
  }
`;

const HeaderNav = () => {
  return (
    <Background>
      <Wrapper>
          <Logo src={EqualsLogo} />
          <SlackInfo href="https://slack.com/app_redirect?channel=email-signatures">Need help? Visit <strong>#email-signatures</strong> in slack</SlackInfo>
      </Wrapper>
    </Background>
  );
};

export default HeaderNav;
