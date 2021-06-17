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
} from "./Components";
import "./Signature.css";
import { Text } from "@fairfx/geometry-web";

export default function Instructions() {
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
      <Text fontSize="large" fontWeight="bold">
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
          <Text as="h3">Instructions for Outlook Web</Text>
          <h4>Instructions for Outlook Web</h4>
          <p>
            1. At the top of the Outlook Web App page on the right hand side
          </p>
          <ol>
            <li>Click Settings</li>
            <li>Scroll down to Mail and press click</li>
            <li>
              Once the Mail Options tab is open scroll down and find Layout
            </li>
            <li>In layout, click email signatures</li>
          </ol>
          <p>
            2. Copy and paste the email signature you have created from the
            FairFX Email Signature Tool into the “Email Signature” box.
          </p>
          <p>
            3. To add your signature to all outgoing messages, select the
            “Automatically include my signature on messages I send” checkbox.
          </p>
          <ul>
            <li>
              If you use both Outlook Web App and Outlook and want a signature
              in both, you need to create a signature in each.
            </li>
          </ul>
          <p>4. Click Save.</p>
        </Modal>

        <Modal
          isOpen={outlookDesktop}
          onRequestClose={showOutlookDesktop}
          style={modalPopup}
        >
          <CloseModal onClick={showOutlookDesktop}>✖</CloseModal>
          <Text as="h3">Instructions for Outlook Desktop</Text>
          <h4>Instructions for Outlook Desktop</h4>
          <p>1. Open a new email message.</p>
          <p>2. Select Signature : Signatures from the Message menu.</p>
          <p>
            3. Depending on the size of your Outlook window and whether you're
            composing a new email message or a reply or forward, the Message
            menu and the Signature button might be in two different locations.
          </p>
          <p>
            4. Under Select signature to edit, choose New, and in the New
            Signature dialog box, type a name for the signature.
          </p>
          <p>5. Under Edit signature, compose your signature. </p>
          <p>
            6. Then copy and paste the signature into the Edit signature box
            from the FairFX Email Signature Tool.
          </p>
          <p>
            7. If you want your signature added to all new messages by default,
            in the New Messages drop-down box, select one of your signatures. If
            you don't want to automatically add a signature to new messages,
            choose (none). This doesn't add a signature to any messages you
            reply to or forward.
          </p>
          <p>
            8. If you want your signature to appear in the messages you reply to
            and forward, in the Replies/forwards drop-down, select one of your
            signatures. Otherwise, accept the default option of (none).
          </p>
          <p>
            9. Choose OK to save your new signature and return to your message.
          </p>
          <p>
            10. Outlook doesn't add your new signature to the message you opened
            in Step 1, even if you chose to apply the signature to all new
            messages. You'll have to add the signature manually to this one
            message. All future messages will have the signature added
            automatically. To add the signature manually, select Signature from
            the Message menu and then pick the signature you just created.
          </p>
        </Modal>

        <Modal
          isOpen={appleMail}
          onRequestClose={showAppleMail}
          style={modalPopup}
        >
          <CloseModal onClick={showAppleMail}>✖</CloseModal>
          <Text as="h3">Instructions for Apple Mail</Text>
          <h4>Instructions for Apple Mail</h4>

          <p>
            1. Go to Apple Mail : Preferences : Signatures and click the +
            button at the bottom of the second column (your signatures list).
          </p>
          <p>
            2. Give your new signature a title and leave it at that (you don’t
            need to enter any text in the third (content) column, as you’ll be
            replacing this content later). (Drag the signature (from the second
            column) on top of the email account you would like it to be
            associated with.)
          </p>

          <p> 3. Quit Mail.</p>

          <p>
            4. Go to your Finder and in the top menu bar click Go : Go to
            Folder… and enter “~/Library/Mail/” (excluding the quote
            marks).(Now, you might see a few folders here. Select the latest “V”
            folder. For example if you see V2, V3 and V4 folders, open V4 (High
            Sierra is now V5, so open that one). Now open MailData :
            Signatures.)
          </p>

          <p>
            5. In the Signatures folder (if you’ve got a lot of files in this
            folder, view the folder as a list and order by the Date Modified
            column) locate the newest file that ends .mailsignature and will
            have a load of letters and numbers as the file name. (Right-Click or
            CTRL-Click on the signature and choose Open With : TextEdit.)
          </p>

          <p>
            6. Delete all text/HTML starting from <strong>body</strong>
          </p>

          <p>
            7. Open your new HTML Signature file (from the FairFX signature
            tool) in TextEdit and copy the text (only copy from the start of,
            and including, <strong>body</strong> tag and ending at, and
            including the <strong>body</strong> tag and paste into position in
            the previous file you’ve just opened
          </p>

          <p> 8. Save, but do not close, the file.</p>

          <p>
            9. Go back to your Finder, highlight the .mailsignature file and
            select File : Get Info and check the “Locked” checkbox.
          </p>

          <p>
            10. Open Apple Mail and create a new email (File : New Message).
            Select your new email signature from the Signatures dropdown.
          </p>

          <p>
            11. If you would like this to be your default signature go to File :
            Preferences : Signatures. Select your email account in the first
            column from the Choose Signature dropdown, select your new
            signature.
          </p>
        </Modal>
      </Row>
    </>
  );
}
