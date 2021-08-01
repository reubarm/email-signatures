import React, { useState } from "react";

import { NavigationItem } from "@fairfx/geometry-web";
import { SideBarNavigation } from "@fairfx/geometry-web";
import Equals from "../icons/Equals";
import Spectrum from "../icons/Spectrum";
import OutlookWeb from "../icons/OutlookDesktop";
import OutlookDesktop from "../icons/OutlookDesktop";
import AppleMail from "../icons/AppleMail";
import {
  Background,
  Wrapper,
  Logo,
  EqualsLogoDark,
  SlackInfo,
  Spacer,
} from "./Components";

import Modal from "react-modal";
import { Row, CloseModal, modalPopup } from "./Components";
import { Text } from "@fairfx/geometry-web";
import instructions from "./Instructions.json";

const Navigation = () => {
  const peoplesHub = window.location.href.includes("people.equals.io");
  const signatureTool =
    window.location.href.includes("signatures.fairfx.io") ||
    window.location.href.includes("localhost") ||
    window.location.href.includes("github");

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

  if (peoplesHub) {
    return (
      <Background>
        <Wrapper>
          <Logo src={EqualsLogoDark} />
          <SlackInfo href="https://slack.com/app_redirect?channel=email-signatures">
            Need help? Visit <strong>#email-signatures</strong> in slack
          </SlackInfo>
        </Wrapper>
      </Background>
    );
  }

  if (signatureTool) {
    return (
      <>
        <SideBarNavigation>
          <Spacer />
          <NavigationItem
            // onClick={equalsSelect}
            select={true}
            icon={Equals}
            title="Equals Group"
          />
          <NavigationItem
            // onClick={spectrumSelect}
            // select={spectrumImg}
            icon={Spectrum}
            title="Spectrum"
          />
          <Spacer />

          <NavigationItem
            onClick={showOutlook}
            icon={OutlookWeb}
            title="Outlook Web"
          />
          <NavigationItem
            onClick={showOutlookDesktop}
            icon={OutlookDesktop}
            title="Outlook Desktop"
          />
          <NavigationItem
            onClick={showAppleMail}
            icon={AppleMail}
            title="Apple Mail"
          />
        </SideBarNavigation>

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
      </>
    );
  }
};

export default Navigation;
