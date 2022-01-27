import Router from "./Router";
import { ReactQueryDevtools } from "react-query/devtools";
import { Reset } from 'styled-reset';
import React from "react";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: ${props => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
  }

  a {
    text-decoration:none;
    color:inherit;
  }
`

function App() {
  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <Router />
      {/* DevTools : Reqct Query의  */}
      <ReactQueryDevtools initialIsOpen={true} />
    </React.Fragment>
  );
}

export default App;