import React from 'react';
import ReactDOM from 'react-dom';
import SignatureTool from './SignatureTool';
import HeaderNav from './HeaderNav';
import {
    equalsTheme,
    ThemeProvider,
  } from '@fairfx/geometry-web';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={equalsTheme}>
            <HeaderNav />
            <SignatureTool />
            </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
