import styled from "styled-components";

export const EqualsLogo =
  "https://cdn.equals.co/images/group-email-signature/optimised/equals-light.png";

export const SpectrumLogo =
  "https://cdn.fairfx.com/images/email-signatures/spec-logo.png";

export const EqualsLogoDark =
  "https://cdn.fairfx.com/images/group-email-signature/equals-dark.png";

export const OutlookWeb =
  "https://cdn.fairfx.com/images/email-signatures/mso-web.png";

export const OutlookDesktop =
  "https://cdn.fairfx.com/images/email-signatures/mso-desktop.png";

export const AppleMail =
  "https://cdn.fairfx.com/images/email-signatures/apple-mail.png";

export const Background = styled.div`
  background-color: #343a40 !important;
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

  @media only screen and (max-width: 800px) {
    margin: 0 0;
  }
`;

export const SlackInfo = styled.a`
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

  @media only screen and (max-width: 800px) {
    display: none;
   }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0 0 20rem;

  @media only screen and (max-width: 800px) {
    margin: 1rem;
  }
`;

export const CompanySelect = styled.div`
  border-radius: 10px;
  margin: 0 0;
  padding: 0;
`;

export const Component = styled.div<{ signature: boolean }>`
  background: #f7f8fc;
  border-radius: 10px;
  
  
  margin: 1rem 0;
  padding: 2rem 3rem 2.5rem;
  width: ${(signature) => (signature ? "800px" : "inherit")};

  @media only screen and (max-width: 800px) {
    padding: 0;
    margin: 0;
    width: 100%;
    background: white;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  flex: 1;
  flex-wrap: wrap;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const InputField = styled.div`
  margin: 1rem;
  width: 45%;

  @media only screen and (max-width: 800px) {
    margin: 1rem 0;
    width: 100%;
  }
`;

export const SignatureBox = styled.div`
  
  
  background: white;
  border: 2px solid #e1e1ea;
  padding: 3rem 5rem;
  margin: 1rem 2rem;
  border-radius: 10px;

  @media only screen and (max-width: 800px) {
    padding: 0;
    margin: 3rem 0;
    border: 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
  margin: 3rem 0;
  font-weight: 400;
  letter-spacing: -1;
`;

export const Companies = styled.div`
  display: flex;
  
  
  margin: 2rem 0 3rem;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Brand = styled.div`
  width: 120px;
  
  
  border: 0;
  cursor: pointer;
  background: white;
  margin: 0 1rem;
  padding: 2rem 5rem;
  border-radius: 5px;
  border: solid 1px #d4d5dd;

  img {
    max-width: 140px;
    
    margin: 0 -0.5rem;
  }

  &:hover {
    background-color: #f7f8fc;
    border: solid 1px #bcbcc9;
  }

  &.active {
    background-color: #f7f8fc;
    border: solid 1px #bcbcc9;
  }

  @media only screen and (max-width: 800px) {
    margin: 1rem 0;
  }
`;

export const ClientLogo = styled.img`
  height: 30px;
`;

export const EmailClient = styled.div`
  width: 120px;
  
  
  border: 0;
  cursor: pointer;
  background: white;
  margin: 0 1rem;
  padding: 2rem 5rem;
  border-radius: 5px;
  border: solid 1px #d4d5dd;
  text-align: center;

  img {
    margin: 0 0 1rem;
    display: block;
  }

  &:hover {
    background-color: #f7f8fc;
    border: solid 1px #bcbcc9;
  }
`;

export const InstructionsModal = styled.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

export const CloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9999;
  color: #555;
  font-size: 24px;
  font-weight: normal;
  transition: 0.3s;
  background: none;
  border: none;
`;

export const modalPopup = {
  content: {
    top: "15%",
    left: "15%",
    right: "15%",
    bottom: "15%",
    padding: "3rem 5rem",
  },
  overlay: {
    background: "rgb(50, 58, 64)",
  },
};

export const ButtonWrapper = styled.div`
  display: block;
  margin: 2rem 0 7rem;
  text-align: center;
  text-align: left;

  button {
    width: 300px;
  }
`;

export const Spacer = styled.hr`
  margin: 5rem auto 5rem 1rem;
  width: 50%;
  border: none;
`;