import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {
  createGlobalStyle,
} from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
  *, ::after, ::before { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    -webkit-tap-highlight-color: transparent;
    overscroll-behavior-y: contain;
  }
  ${'' /* button {
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
  input::placeholder,
  input::-webkit-input-placeholder,
  input::-moz-placeholder {
    line-height: normal !important;
    vertical-align: middle;
  }
  a { color: inherit; text-decoration: none; }
  a > * { opacity: inherit; }
  a:hover {
    opacity: .7;

    ${media.mobile`
      opacity: 1;
    `};
  }
  iframe {
    border-width: 0px;
  }

  ${media.tablet`
    html { touch-action: manipulation; }
  `}; */}
`;


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
