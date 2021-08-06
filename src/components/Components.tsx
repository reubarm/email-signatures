import styled from "styled-components";
import { color as colorTokens, sizes, spaces } from '../styles/tokens';

export const EqualsLogo =
  "https://cdn.equals.co/images/group-email-signature/optimised/equals-light.png";

export const SpectrumLogo =
  "https://cdn.fairfx.com/images/group-email-signature/spectrum-light.png";

export const EqualsLogoDark =
  "https://cdn.fairfx.com/images/group-email-signature/equals-dark.png";

export const SpectrumLogoDark =
  "https://cdn.fairfx.com/images/group-email-signature/spectrum-dark.png";

export const OutlookWeb =
  "https://cdn.fairfx.com/images/email-signatures/mso-web.png";

export const OutlookDesktop =
  "https://cdn.fairfx.com/images/email-signatures/mso-desktop.png";

export const AppleMail =
  "https://cdn.fairfx.com/images/email-signatures/apple-mail.png";

export const modalPopup = {
  content: {
    top: sizes[32],
    left: sizes[24],
    right: sizes[24],
    bottom: sizes[32],
    padding: "0" + sizes[20],
  },
  overlay: {
    background: colorTokens.charcoal.light.value,
  },
};

export const Background = styled.div`
  background-color: ${colorTokens.charcoal.base.value}!important;
  position: relative;
  z-index: 1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  height: 70px;
  max-width: 1140px;
  margin: 0 0;
`;

export const Logo = styled.img`
  height: 35px;

  @media only screen and (max-width: ${spaces[800]}) {
    margin: 0 0;
  }
`;

export const SlackInfo = styled.a`
  cursor: pointer;
  position: relative;
  color: ${colorTokens.white.base.value}!important;
  padding: 0 ${spaces[3]};
  transition: all 0.3s;
  text-decoration: none;
  margin-left; auto;
  float: right;

  :hover {
    color: ${colorTokens.white.base.value}!important;
  }

  @media only screen and (max-width: ${spaces[800]}) {
    display: none;
   }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spaces[12]} 0 0 ${spaces[80]};

  @media only screen and (max-width: ${spaces[800]}) {
    margin: 0;
  }
`;

export const CompanySelect = styled.div`
  border-radius: 10px;
  margin: 0 0;
  padding: 0;
`;

export const Component = styled.div<{ signature: boolean }>`
  background: ${colorTokens.athens_gray.base.value};
  border-radius: 10px;
  
  margin: ${spaces[6]} 0 ${spaces[8]};
  padding: ${spaces[4]};
  width: ${(signature) => (signature ? "800px" : "inherit")};

  @media only screen and (max-width: ${spaces[800]}) {
    padding: 0;
    margin: 0;
    width: 100%;
    background: ${colorTokens.white.base.value};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background: ${colorTokens.athens_gray.base.value};

  @media only screen and (max-width: ${spaces[800]}) {
    background: ${colorTokens.white.base.value};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex: 1;
  flex-wrap: wrap;

  @media only screen and (max-width: ${spaces[800]}) {
    flex-direction: column;
  }
`;

export const InputField = styled.div`
  margin: ${spaces[4]};
  width: 45%;

  @media only screen and (max-width: ${spaces[800]}) {
    margin: ${spaces[4]} 0;
    width: 100%;
  }
`;

export const SignatureBox = styled.div`
  background: ${colorTokens.white.base.value};
  border: 10px solid #e1e1ea;
  padding: ${spaces[12]} ${spaces[20]};
  margin: ${spaces[4]} ${spaces[8]};
  border-radius: 10px;

  @media only screen and (max-width: ${spaces[800]}) {
    padding: 0;
    margin: ${spaces[12]} 0;
    border: 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: ${colorTokens.charcoal.base.value};
  margin: ${spaces[12]} 0;
  font-weight: 400;
  letter-spacing: -1;
`;

export const Companies = styled.div`
  display: flex;
  margin: ${spaces[8]} 0 ${spaces[12]};

  @media only screen and (max-width: ${spaces[800]}) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Brand = styled.div`
  width: 120px;
  border: 0;
  cursor: pointer;
  background: ${colorTokens.white.base.value};
  margin: 0 ${spaces[4]};
  padding: ${spaces[8]} ${spaces[20]};
  border-radius: 5px;
  border: solid 1px #d4d5dd;

  img {
    max-width: 140px;
    margin: 0 -${spaces[2]};
  }

  &:hover {
    background-color: ${colorTokens.athens_gray.base.value};
    border: solid 1px #bcbcc9;
  }

  &.active {
    background-color: ${colorTokens.athens_gray.base.value};
    border: solid 1px #bcbcc9;
  }

  @media only screen and (max-width: ${spaces[800]}) {
    margin: ${spaces[4]} 0;
  }
`;

export const ClientLogo = styled.img`
  height: 30px;
`;

export const EmailClient = styled.div`
  width: 120px;  
  border: 0;
  cursor: pointer;
  background: ${colorTokens.white.base.value};
  margin: 0 1rem;
  padding: ${spaces[8]} ${spaces[20]};
  border-radius: 5px;
  border: solid 1px #d4d5dd;
  text-align: center;

  img {
    margin: 0 0 ${spaces[4]};
    display: block;
  }

  &:hover {
    background-color: ${colorTokens.athens_gray.base.value};
    border: solid 1px #bcbcc9;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;
  color: ${colorTokens.charcoal.light.value};
  font-size: 24px;
  font-weight: normal;
  transition: 0.3s;
  background: none;
  border: none;
`;

export const ButtonWrapper = styled.div`
  display: block;
  margin: ${spaces[4]} 0 ${spaces[32]};
  text-align: center;
  text-align: left;

  button {
    width: 300px;
  }
`;

export const Spacer = styled.hr`
  margin: ${spaces[20]} auto ${spaces[20]} ${spaces[4]};
  width: 50%;
  border: none;
`;