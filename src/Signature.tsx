import React from "react";
import ReactDOM from "react-dom";
import { SignatureData } from "./SignatureTool";
import { SignatureBox } from "./Components";

import parse from "html-react-parser";
import { HTMLReactParserOptions } from 'html-react-parser';
import Parser from 'html-react-parser';

import ReactHtmlParser, {
  convertNodeToElement,
  processNodes,
} from "react-html-parser";

const signature = `<table class="user-signature">
        <tbody>
          <tr>
            <td>
              <meta name="color-scheme" content="light dark" /><meta
                name="supported-color-schemes"
                content="light dark"
              /><meta name="format-detection" content="telemobile=no" />
              <table
                cellspacing="0"
                cellpadding="0"
                style="width: 100%; max-width: 600px; margin: 10px 0 0"
              >
                <tbody>
                  <tr>
                    <td
                      valign="top"
                      width="120"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        vertical-align: top;
                        max-width: 120px;
                        padding: 0;
                        margin: 0;
                      "
                      class="group-logo"
                    >
                      <table
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          width: 120px;
                          margin: 0;
                          padding: 0;
                          border-collapse: collapse;
                        "
                        width="120"
                      >
                        <tbody>
                          <tr>
                            <td
                              ng-repeat="item in company(selectedCompany)"
                              style="padding: 5px 0 0"
                              class="ng-scope"
                            >
                              <a href="https://equalsmoney.com/"
                                ><img
                                  class="light-img group-logo"
                                  src="https://cdn.equals.co/images/group-email-signature/optimised/equals-light.png"
                                  nosend="1"
                                  width="120"
                                  alt="Equals Logo"
                                  style="
                                    vertical-align: top;
                                    width: 115px;
                                    padding: 0;
                                    margin: 0;
                                    display: inline-block;
                                  "
                              /></a>
                              <a href="https://equalsmoney.com/"
                                ><img
                                  class="dark-img group-logo"
                                  src="https://cdn.equals.co/images/group-email-signature/optimised/equals-dark.png"
                                  nosend="1"
                                  width="120"
                                  alt="Equals Logo"
                                  style="
                                    vertical-align: top;
                                    width: 115px;
                                    padding: 0;
                                    margin: 0;
                                    display: none;
                                  "
                              /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td><td
                valign="top"
                style="
                vertical-align: top;
                padding: 0 0 0 30px;
                margin: 0;
                "
                class="users"
                >
                <table
                cellpadding="0"
                cellspacing="0"
                style="
                    width: 360px;
                    margin: 0;
                    padding: 0;
                    border-collapse: collapse;
                "
                width="360"
                class="user-details"
                >
                <tbody>
                    <tr>
                    <td
                        valign="top"
                        id="name"
                        style="
                        margin: 0;
                        padding: 0 30px 0 0;
                        margin-right: auto;
                        text-align: left;
                        color: #000000;
                        font-weight: bold;
                        line-height: 20px;
                        font-family: Arial, sans-serif;
                        font-size: 16px;
                        "
                     />{name}</td>
                <td valign="top" class="has-linkedin">
                <a class="target" href="">
                    <img
                    width="20"
                    height="20"
                    class="light-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/linkedin-light.png"
                    alt="linkedin"
                    style="
                        margin-left: auto;
                        float: right;
                        border: 0;
                        height: 20px;
                        width: 20px;
                    "
                    />
                    <img
                    width="20"
                    height="20"
                    class="dark-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/linkedin-dark.png"
                    alt="linkedin"
                    style="
                        margin-left: auto;
                        float: right;
                        border: 0;
                        height: 20px;
                        width: 20px;
                        display: none;
                    "
                    />
                </a>
                </td>
                </tr>
                <tr>
                <td
                class="has-role ng-binding"
                style="
                    padding: 2px 0 7px 0;
                    text-align: left;
                    color: #000000;
                    font-family: Arial, sans-serif;
                    line-height: 18px;
                    font-weight: bold;
                    font-size: 12px;
                    display: block;
                    margin: 0;
                "
                >{jobrole}</td>
                </tr>
                <tr>
                <td
                style="
                    text-align: left;
                    color: #000000;
                    font-family: Arial, sans-serif;
                    font-size: 12px;
                    line-height: 18px;
                    padding: 0;
                    margin: 0;
                    text-decoration: none;
                    text-transform: none;
                "
                class="has-landline ng-binding"
                >
                +44 (0) {landline}
                </td>
                </tr>
                <tr>
                <td
                style="
                    text-align: left;
                    color: #000000;
                    font-family: Arial, sans-serif;
                    line-height: 18px;
                    font-size: 12px;
                    padding: 0;
                    margin: 0;
                    text-decoration: none;
                    text-transform: none;
                "
                class="has-mobile ng-binding"
                >
                +44 (0) {mobile}
                </td>
                </tr>
                <td
                class="equals-site"
                style="
                    text-align: left;
                    font-family: Arial, sans-serif;
                    line-height: 22px;
                    font-size: 12px;
                    margin: 0;
                    padding: 0 0 10px 0;
                "
                >
                <a
                    href="https://equalsmoney.com/"
                    style="
                    color: #000;
                    text-transform: none;
                    font-weight: 700;
                    text-decoration: none;
                    "
                    class="equals-site"
                    >equalsmoney.com</a
                >
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                <table
                cellpadding="0"
                cellspacing="0"
                style="margin: 0; padding: 0; border-collapse: collapse"
                >
                <tbody>
                <tr>
                <td
                valign="top"
                style="
                width: 120px;
                min-width: 120px;
                max-width: 120px;
                padding: 0;
                margin: 0;
                "
                class="hide-mobile"
                ></td>
                <td
                valign="top"
                width="360"
                style="
                width: 360px;
                vertical-align: top;
                line-height: 11px;
                padding: 5px 30px;
                "
                class="show-mobile"
                >
                <table
                width="360"
                cellpadding="0"
                cellspacing="0"
                style="
                border-top: 1px solid #000;
                margin: 0;
                padding: 0;
                width: 360px;
                border-collapse: collapse;
                "
                class="divider show-mobile"
                >
                <tbody>
                <tr width="360" cellpadding="0" cellspacing="0">
                <td
                width="120"
                cellpadding="0"
                cellspacing="0"
                align="left"
                style="
                    padding: 15px 0 10px;
                    width: 120px;
                    text-align: left;
                    border-collapse: collapse;
                "
                >
                <a
                    href="https://equalsmoney.com/"
                    target="_blank"
                    rel="noopener"
                >
                    <img
                    class="light-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/em-light.png"
                    alt="Equals Money"
                    height="20"
                    width="80"
                    style="
                        height: 20px;
                        width: 80px;
                        padding: 0;
                        margin: 0;
                        border: 0;
                        display: inline-block;
                    "
                    />
                    <img
                    class="dark-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/em-dark.png"
                    alt="Equals Money"
                    height="20"
                    width="80"
                    style="
                        height: 20px;
                        width: 80px;
                        padding: 0;
                        margin: 0;
                        border: 0;
                        display: none;
                    "
                    />
                </a>
                </td>
                <td
                width="120"
                cellpadding="0"
                cellspacing="0"
                align="center"
                style="
                    padding: 15px 0 10px;
                    width: 120px;
                    text-align: center;
                    border-collapse: collapse;
                "
                >
                <a
                    href="https://www.fairfx.com/"
                    target="_blank"
                    rel="noopener"
                >
                    <img
                    class="light-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/ffx-light.png"
                    alt="FairFX"
                    height="23"
                    width="67"
                    style="
                        height: 23px;
                        width: 67px;
                        padding: 0;
                        margin: 0;
                        border: 0;
                        display: inline-block;
                    "
                    />
                    <img
                    class="dark-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/ffx-dark.png"
                    alt="FairFX"
                    height="23"
                    width="67"
                    style="
                        height: 23px;
                        width: 67px;
                        padding: 0;
                        margin: 0;
                        border: 0;
                        display: none;
                    "
                    />
                </a>
                </td>
                <td
                width="120"
                cellpadding="0"
                cellspacing="0"
                align="right"
                style="
                    padding: 15px 5px 10px;
                    width: 120px;
                    text-align: right;
                    border-collapse: collapse;
                "
                >
                <a
                    href="https://cardonemoney.com/"
                    target="_blank"
                    rel="noopener"
                >
                    <img
                    class="light-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/com-old-light.png"
                    alt="CardOneMoney"
                    height="24"
                    width="60"
                    style="
                        height: 24px;
                        width: 60px;
                        margin: 0;
                        padding: 0;
                        border: 0;
                        display: inline-block;
                    "
                    />
                    <img
                    class="dark-img"
                    src="https://cdn.equals.co/images/group-email-signature/optimised/com-old-dark.png"
                    alt="CardOneMoney"
                    height="24"
                    width="60"
                    style="
                        height: 24px;
                        width: 60px;
                        margin: 0;
                        padding: 0;
                        border: 0;
                        display: none;
                    "
                    />
                </a>
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                <tr>
                <td
                valign="top"
                width="120"
                style="max-width: 120px; padding: 0; margin: 0"
                class="hide-mobile"
                ></td>
                <td
                width="360"
                style="
                width: 360px;
                padding: 0 0 0 30px;
                line-height: 12px;
                font-size: 7px;
                color: #808080;
                font-family: Arial, sans-serif;
                "
                class="show-mobile"
                >
                Company registered in Eng‌l‌and & Wa‌l‌es No.
                089‌224‌61. Vintn‌ers Pla‌ce, 68 Up‌per Tha‌mes St,
                Lon‌don EC‌4V 3‌BJ
                </td>
                </tr>
                </tbody>
                </table>
                </td>
                </tr>
                </tbody>
                </table>
                </div>
                </div>
                </div>
</div>`;

export const Signature = (props: SignatureData) => {
  return (
      <>
      <SignatureBox>
        <div className="signature">
          <div dangerouslySetInnerHTML={{ __html: signature }} />
        </div>
      </SignatureBox>
    </>
  );
};

export const PersonalData = (props: SignatureData) => {
  return (
    <>
      <img
        src={
          props.spectrum
            ? "https://cdn.equals.co/images/group-email-signature/optimised/spectrum-light.png"
            : "https://cdn.equals.co/images/group-email-signature/optimised/equals-light.png"
        }
        width="100"
      /><br/>
      • {props.name}<br/>
      • {props.jobrole}<br/>
      • {props.landline}<br/>
      • {props.mobile}
    </>
  );
};
