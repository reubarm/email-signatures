import { EqualsLogo, EqualsLogoDark } from "./Components";

let logo = EqualsLogo;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches) {
  logo = EqualsLogoDark;
}

const defaultContext = {
  logo: logo,
  setLogo: () => {},
};

export default defaultContext;
