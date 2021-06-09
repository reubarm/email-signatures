import React from "react";
import { Signature, PersonalData } from "./Signature";
import Instructions from "./InstructionsModal";
import "./Signature.css";
import {
  Row,
  Column,
  Container,
  Component,
  CompanySelect,
  Companies,
  Brand,
  ButtonWrapper,
} from "./Components";
import { Text, PrimaryButton, Input } from "@fairfx/geometry-web";

export interface SignatureData {
  name: string;
  jobrole: string;
  landline: string;
  mobile: string;
  logo: string;
  equals: boolean;
  spectrum: boolean;
}

interface State extends SignatureData {
  equals: boolean;
  spectrum: boolean;
  copied: boolean;
}

const initialState: State = {
  name: "",
  jobrole: "",
  landline: "",
  mobile: "",
  logo: "",
  equals: false,
  spectrum: false,
  copied: false,
};

function SignatureTool() {
  const [state, setState] = React.useState<State>(initialState);
  const [showEmailSignature, setShowEmailSignature] = React.useState(false);
  const showSignature = () => setShowEmailSignature(true);

  const [spectrum, setSpectrum] = React.useState(false);
  const [equals, setEquals] = React.useState(false);

  const changeState = () => {
    return JSON.stringify(state) === JSON.stringify(initialState);
  };

  const clearState = () => {
    setState(initialState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const [equalsImg, setEqualsImg] = React.useState("");
  const equalsSelect = () => {
    setEqualsImg(equalsImg === "" ? "active" : "");
    setSpectrumImg(equalsImg === "" ? "" : "");
  };

  const [spectrumImg, setSpectrumImg] = React.useState("");
  const spectrumSelect = () => {
    setSpectrumImg(spectrumImg === "" ? "active" : "");
    setEqualsImg(equalsImg === "" ? "" : "");
  };

  const equalsLogo = () => {
    setState((prevState) => ({
      ...prevState,
      equals: true,
    }));
  };

  const spectrumLogo = () => {
    setState((prevState) => ({
      ...prevState,
      spectrum: true,
    }));
  };

  const copySignature = () => {
    let copyText = document.querySelector(".signature");
    const range = document.createRange();
    if (copyText) {
      range.selectNode(copyText);
    }
    const windowSelection = window.getSelection();
    if (windowSelection) {
      windowSelection.removeAllRanges();
      windowSelection.addRange(range);
    }
    try {
      let successful = document.execCommand("copy");
      setState((prevState) => ({
        ...prevState,
        copied: true,
      }));
    } catch (err) {}
  };

  const signature = () => {
    return (
      <>
        <Signature
          name={state.name}
          jobrole={state.jobrole}
          landline={state.landline}
          mobile={state.mobile}
          logo={state.logo}
          spectrum={state.spectrum}
          equals={state.equals}
        />
      </>
    );
  };

  const personalData = () => {
    return (
      <>
        <PersonalData
          name={state.name}
          jobrole={state.jobrole}
          landline={state.landline}
          mobile={state.mobile}
          logo={state.logo}
          spectrum={state.spectrum}
          equals={state.equals}
        />
      </>
    );
  };

  const EmailSignature = () => (
    <div>
      <Container>
        <Text as="h4">Your email signature:</Text>
        <Component signature={true}>
          <Row>
            <Column>{signature()}</Column>
          </Row>
        </Component>
        <ButtonWrapper>
          <PrimaryButton onClick={copySignature}>
            {state.copied ? "Copied" : "Copy Signature"}
          </PrimaryButton>
        </ButtonWrapper>

        {/*  This is the personal data from the form and brand selector */}
        <Container>{personalData()}</Container>
      </Container>
    </div>
  );

  return showEmailSignature ? (
    <EmailSignature />
  ) : (
    <Container>
      <Text as="h3">Create your email signature</Text>
      <Text fontSize="large" fontWeight="bold">
        Select your company:
      </Text>

      <CompanySelect>
        <Companies>
          <Brand onClick={equalsSelect} className={equalsImg}>
            <img
              src="https://cdn.fairfx.com/images/group-email-signature/equals-light.png"
              onClick={equalsLogo}
            />
          </Brand>
          <Brand onClick={spectrumSelect} className={spectrumImg}>
            <img
              src="https://cdn.fairfx.com/images/email-signatures/spec-logo.png"
              onClick={spectrumLogo}
            />
          </Brand>
        </Companies>
      </CompanySelect>

      <Text as="h4">Enter your details:</Text>

      <Component signature={false}>
        <form noValidate autoComplete="off">
          <Row>
            <Column>
              <Input
                placeholder="Full Name"
                isReadonly={false}
                isError={false}
                value={state.name}
                name={"name"}
                onChange={handleChange}
                autoFocus={false}
                color="secondary"
              />

              <br />
              <br />

              <Input
                isReadonly={false}
                isError={false}
                placeholder="Landline Number"
                value={state.landline}
                name={"landline"}
                onChange={handleChange}
                autoFocus={false}
                color="secondary"
              />
            </Column>
            <Column>
              <Input
                isReadonly={false}
                isError={false}
                placeholder="Job Role"
                value={state.jobrole}
                name={"jobrole"}
                onChange={handleChange}
                autoFocus={false}
                color="secondary"
              />
              <br />
              <br />
              <Input
                isReadonly={false}
                isError={false}
                placeholder="Mobile Number"
                value={state.mobile}
                name={"mobile"}
                onChange={handleChange}
                autoFocus={false}
                color="secondary"
              />
            </Column>
          </Row>
        </form>
      </Component>
      <ButtonWrapper>
        <PrimaryButton onClick={showSignature}>View Signature</PrimaryButton>
      </ButtonWrapper>
    </Container>
  );
}

export default SignatureTool;
