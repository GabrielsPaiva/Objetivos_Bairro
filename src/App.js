import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Main from './pages/Main';

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`
export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Main/>
      </div>
    );
  }
}