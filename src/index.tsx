import { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import AppContext from "./components/AppContext";
import SignatureTool from "./components/SignatureTool";
import Navigation from "./components/Navigation";
import { SpectrumLogo, EqualsLogo } from "./components/Components";
import { equalsTheme, ThemeProvider } from "@fairfx/geometry-web";

function App() {



  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-theme");
}
  

  
  
  // else if (prefersLightScheme.matches) {
  //   document.body.classList.add("light-theme");
  //   const test2 = document.querySelector('h3, p, input');
  //   test2.classList.add("lgiht-theme");
  // }
  

  
  
  
  
  const appContext = useContext(AppContext);
  const [context, setContext] = useState(appContext);
  const [isSpectrum, setSpectrum] = useState(false);
  const brand = () => {
    setContext({
      ...context,
      logo: !isSpectrum ? SpectrumLogo : EqualsLogo,
    });
    setSpectrum(!isSpectrum);
  };
  const state = {
    ...context,
    brand: brand,
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
