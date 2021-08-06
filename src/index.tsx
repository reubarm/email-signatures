import { useContext, useState } from "react";
import ReactDOM from "react-dom";
import AppContext from "./components/AppContext";
import SignatureTool from "./components/SignatureTool";
import Navigation from "./components/Navigation";
import { SpectrumLogo, EqualsLogo, SpectrumLogoDark, EqualsLogoDark } from "./components/Components";
import { equalsTheme, ThemeProvider } from "@fairfx/geometry-web";

function App() {
  const appContext = useContext(AppContext);
  const [context, setContext] = useState(appContext);
  const [isSpectrum, setSpectrum] = useState(false);
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  if (prefersDarkScheme.matches) {
    document.documentElement.classList.add("dark");
    document.body.classList.add("dark-theme");
  }
  const brand = () => {
    if (prefersDarkScheme.matches) {
      setContext({
        ...context,
        logo: !isSpectrum ? SpectrumLogoDark : EqualsLogoDark,
      });
    } else {
      setContext({
        ...context,
        logo: !isSpectrum ? SpectrumLogo : EqualsLogo,
      });
    }
    setSpectrum(!isSpectrum);
  };
  const state = {
    ...context,
    brand: brand
  };
  return (
    <AppContext.Provider value={state}>
      <ThemeProvider theme={equalsTheme}>
        <Navigation />
        <SignatureTool />
      </ThemeProvider>
    </AppContext.Provider>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
