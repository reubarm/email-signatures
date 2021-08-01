import React, { useState, createContext, useContext } from "react";
import {
  Row,
  Column,
  Container,
  Component,
  InputField,
  ButtonWrapper,
} from "./Components";
import "../styles/Signature.css";
import { Text, PrimaryButton, Input } from "@fairfx/geometry-web";
import { Signature } from "../Signature";
import Instructions from "./InstructionsModal";

export interface SignatureData {
  name: string;
  jobrole: string;
  landline: string;
  mobile: string;
  linkedin: string;
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
  linkedin: "",
  equals: false,
  spectrum: false,
  copied: false,
};

const SignatureTool = () => {
  const [state, setState] = useState<State>(initialState);
  const [showEmailSignature, setShowEmailSignature] = useState(false);
  const showSignature = () => setShowEmailSignature(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
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

  const signatureData = () => {
    return (
      <>
        <Signature
          name={state.name}
          jobrole={state.jobrole}
          landline={state.landline}
          mobile={state.mobile}
          linkedin={state.linkedin}
          equals={state.equals}
          spectrum={state.spectrum}
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
            <Column>{signatureData()}</Column>
          </Row>
        </Component>
        <ButtonWrapper>
          <PrimaryButton onClick={copySignature}>
            {state.copied ? "Copied" : "Copy Signature"}
          </PrimaryButton>
        </ButtonWrapper>
        <Instructions />
      </Container>
    </div>
  );

  return showEmailSignature ? (
    <EmailSignature />
  ) : (
    <>
      <Container>
        <Text as="h3">Create your email signature</Text>

        <Text fontSize="large" fontWeight="bold">
          Enter your details:
        </Text>

        <Component signature={false}>
          <form noValidate autoComplete="off">
            <Row>
              <Column>
                <InputField>
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
                </InputField>
                <InputField>
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
                </InputField>
                <InputField>
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
                </InputField>
                <InputField>
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
                </InputField>
                <InputField>
                  <Input
                    isReadonly={false}
                    isError={false}
                    placeholder="LinkedIn URL"
                    value={state.linkedin}
                    name={"linkedin"}
                    onChange={handleChange}
                    autoFocus={false}
                    color="secondary"
                  />
                </InputField>
              </Column>
            </Row>
          </form>
        </Component>
        <ButtonWrapper>
          <PrimaryButton onClick={showSignature}>View Signature</PrimaryButton>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default SignatureTool;
