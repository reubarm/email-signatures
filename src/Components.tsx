import styled from "styled-components";

export const EqualsLogo =
  "https://cdn.equals.co/images/group-email-signature/optimised/equals-light.png";
export const SpectrumLogo =
  "https://cdn.equals.co/images/group-email-signature/optimised/equals-dark.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const CompanySelect = styled.div`
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const Component = styled.div<{ signature: boolean }>`
  background: #F7F8FC;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 3rem 5rem;
  width: ${signature => (signature ? '800px' : 'inherit')};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin: 0 1rem;
  width: 400px;
`;

export const SignatureBox = styled.div`
  align-items: center;
  justify-content: center;
  background: white;
  border: 2px solid #E1E1EA;
  padding: 3rem 5rem;
  margin: 1rem 2rem;
  border-radius: 10px;
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
  align-items: center;
  justify-content: center;
  margin: 2rem 0 3rem;
`;

export const Brand = styled.div`
  width: 120px;
  justify-content: center;
  align-items: center;
  border: 0;
  cursor: pointer;
  background: white;
  margin: 0 1rem;
  padding: 2rem 5rem;
  border-radius: 5px;
  border: solid 1px #D4D5DD;

  img {
    max-width: 140px;
     align-items: center;
     margin: 0 -0.5rem;
  }

  &:hover {
    background-color: #F7F8FC;
    border: solid 1px #BCBCC9;
  }
  &.active{
    background-color: #F7F8FC;
    border: solid 1px #BCBCC9;
  }
`;

export const ButtonWrapper = styled.div`
  display: block;
  margin: 2rem auto;
  text-align: center;

  button {
    width: 300px;
  }
`;