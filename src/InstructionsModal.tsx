import React from "react";
import { PrimitiveModal, ActionModal } from "@fairfx/geometry-web";

const Instructions = () => {
  const modalRef = React.useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.handleOpen();
    }
  };
  return (
    <>
      <button type="button" onClick={openModal}>
        Outlook Web
      </button>
      <ActionModal
        open
        ref={modalRef}
        title="Instructions for Outlook Web"
        primary={{ label: "Primary Button" }}
        secondary={{ label: "Secondary Button" }}
      >
        <ul>
          <li>
            1. At the top of the Outlook Web App page on the right hand side
          </li>
          Click Settings Scroll down to Mail and press click Once the Mail
          Options tab is open scroll down and find Layout In layout, click email
          signatures
          <li>
            2. Copy and paste the email signature you have created from the
            FairFX Email Signature Tool into the “Email Signature” box.
          </li>
          <li>
            3. To add your signature to all outgoing messages, select the
            “Automatically include my signature on messages I send” checkbox.
          </li>
          If you use both Outlook Web App and Outlook and want a signature in
          both, you need to create a signature in each.
          <li>4. Click Save.</li>
        </ul>
      </ActionModal>
    </>
  );
};

export default Instructions;
