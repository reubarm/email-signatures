import React from "react";
import ReactDOM from "react-dom";
import SignatureTool from "./components/SignatureTool";
import Navigation from "./components/Navigation";
import { equalsTheme, ThemeProvider } from "@fairfx/geometry-web";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={equalsTheme}>
      {/* <Company brand={brand}> */}
      
        <Navigation />
        <SignatureTool />
        
      {/* </Company> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
