import React, { useState, useContext } from "react";
import {
  Row,
  Column,
  Container,
  Component,
  InputField,
  ButtonWrapper,
} from "./Components";
import "../styles/Signature.scss";
import { Text, PrimaryButton, Input } from "@fairfx/geometry-web";
import { Signature } from "../Signature";
import AppContext from "./AppContext";

export interface SignatureData {
  name: string;
  jobrole: string;
  landline: string;
  mobile: string;
  linkedin: string;
  logo: string;
}

interface State extends SignatureData {
  copied: boolean;
  logo: string;
}

const initialState: State = {
  name: "",
  jobrole: "",
  landline: "",
  mobile: "",
  linkedin: "",
  copied: false,
  logo: ""
};






const darkMode = "signature-tool";




const SignatureTool = () => {
  const [state, setState] = useState<State>(initialState);
  const [showEmailSignature, setShowEmailSignature] = useState(false);
  const showSignature = () => setShowEmailSignature(true);
  const { logo } = useContext(AppContext);
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
          logo={logo}
        />
      </>
    );
  };

  const EmailSignature = () => (
    <div>
      <Container>
        <Text as="h4">Your email signature:</Text>
        <Component signature={true} className={darkMode}>
          <Row className={darkMode}>
            <Column>{signatureData()}</Column>
          </Row>
        </Component>
        <ButtonWrapper>
          <PrimaryButton onClick={copySignature}>
          <span className="button">{state.copied ? "Copied" : "Copy Signature"}</span>
          </PrimaryButton>
        </ButtonWrapper>
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
          <Component signature={false} className={darkMode}>
          <form>
            <Row className={darkMode}>
                <Column >
                <InputField>
                  <Input
                    placeholder="Full Name"
                    isReadonly={false}
                    isError={false}
                    value={state.name}
                    name={"name"}
                    onChange={handleChange}
                    autoFocus={false}
                    color="primary"
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
            <PrimaryButton onClick={showSignature}><span className="button">View Signature</span></PrimaryButton>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default SignatureTool;
