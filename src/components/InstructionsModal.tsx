import React, { useState } from "react";
import Modal from "react-modal";
import {
  Row,
  CompanySelect,
  Companies,
  EmailClient,
  ClientLogo,
  CloseModal,
  modalPopup,
  AppleMail,
  OutlookDesktop,
  OutlookWeb,
  InstructionsModal,
} from "./Components";
import { Text } from "@fairfx/geometry-web";
import instructions from "./Instructions.json";

const Instructions = () => {
  const [outlookWeb, openOutlookWeb] = useState(false);
  const [outlookDesktop, openOutlookDesktop] = useState(false);
  const [appleMail, openAppleMail] = useState(false);

  function showOutlook() {
    openOutlookWeb(!outlookWeb);
  }
  function showOutlookDesktop() {
    openOutlookDesktop(!outlookDesktop);
  }
  function showAppleMail() {
    openAppleMail(!appleMail);
  }

  return (
    <>
      <InstructionsModal>
        <Text fontSize="large" fontWeight="bold" >
          Instructions:
        </Text>

        <CompanySelect>
          <Companies>
            <EmailClient onClick={showOutlook}>
              <ClientLogo src={OutlookWeb} />
              Outlook Web
            </EmailClient>
            <EmailClient onClick={showOutlookDesktop}>
              <ClientLogo src={OutlookDesktop} />
              Outlook Desktop
            </EmailClient>
            <EmailClient onClick={showAppleMail}>
              <ClientLogo src={AppleMail} />
              Apple Mail
            </EmailClient>
          </Companies>
        </CompanySelect>

        <Row>
          <Modal
            isOpen={outlookWeb}
            onRequestClose={showOutlook}
            style={modalPopup}
          >
            <CloseModal onClick={showOutlook}>✖</CloseModal>
            <Text as="h3">{instructions.outlookWeb.title}</Text>
            <Text as="p">
              <div
                dangerouslySetInnerHTML={{
                  __html: instructions.outlookWeb.steps,
                }}
              />
            </Text>
          </Modal>

          <Modal
            isOpen={outlookDesktop}
            onRequestClose={showOutlookDesktop}
            style={modalPopup}
          >
            <CloseModal onClick={showOutlookDesktop}>✖</CloseModal>
            <Text as="h3">{instructions.outlookDekstop.title}</Text>
            <Text as="p">
              <div
                dangerouslySetInnerHTML={{
                  __html: instructions.outlookDekstop.steps,
                }}
              />
            </Text>
          </Modal>

          <Modal
            isOpen={appleMail}
            onRequestClose={showAppleMail}
            style={modalPopup}
          >
            <CloseModal onClick={showAppleMail}>✖</CloseModal>
            <Text as="h3">{instructions.appleMail.title}</Text>
            <Text as="p">
              <div
                dangerouslySetInnerHTML={{
                  __html: instructions.appleMail.steps,
                }}
              />
            </Text>
          </Modal>
        </Row>
      </InstructionsModal>
    </>
  );
}

export default Instructions;