import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

 /**
  * =================
  *     FONTS
  * =================
  */
   @font-face {
    font-family: 'RobotoMedium';
    src: url('/static/fonts/roboto/Roboto-Medium.woff2')format('woff2');
    font-weight: normal;
    font-style: normal;
    /* font-display: fallback; */
   } 
   @font-face {
    font-family: 'Roboto';
    src: url('/static/fonts/roboto/Roboto-Regular.woff2')format('woff2');
    font-weight: normal;
    font-style: normal;
    /* font-display: fallback; */
   } 

 /**
  * ==================
  *     Variables
  * ==================
  */
  html{
    --red: #ff1234;
    --black: #393939;
    --gray: #3a3a3a;
    --lightGray: #e1e1e1;
    --blurp: #2de708;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.9); 
    --gutter: 2rem;

    --primaryBrandColor: #0000;
    --secondaryBrandColor: #0000;
    --thirdBrandColor: #0000;

    --primaryTextDark: #0000;
    --primaryTextLight: #0000;

    --primaryBackgroundDark: #0000;
    --secondaryBackgroundDark: #0000;

    --primaryBackgroundLight: #0000;
    --secondaryBackgroundLight: #0000;

    /* --disabled: #959495; */
    --disabled: green;
  }

 /**
  * =====================
  *     Global Styles
  * =====================
  */
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0 auto;
    font-size: 10px;  
    font-family: Helvetica, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
      Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 18px;
  }
  img {
    max-width: 100%;
    display: block;
  }
  // Button Reset
  button {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
  }
  button:hover {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    cursor: pointer;
  }
  button:active {
    outline: none;
    border: none;
  }
  button:focus {
    outline: 0;
  }
  legend {
    padding: 0;
    display: table;
  }
  // Field set reset
  fieldset {
    border: 0;
    padding: 0.01em 0 0 0;
    margin: 0;
    min-width: 0;
  }
  body:not(:-moz-handler-blocked) fieldset {
    display: table-cell;
  }
  // anchor tag reset
  a {
    text-decoration: none;
    color: var(--black);
    &:hover {
      cursor: pointer;
    }
  }
  input{
    border: none;
  }
  textarea {
    width: 100%;
    padding: 5px 6px;
  }

  textarea, input {
    &:focus {
      outline: none;
    }
  }


 /**
  * ===================
  *     Typography
  * ===================
  */
  .h1,.h2,.h3,.h4,.h5 {
    font-family: 'RobotoMedium', serif;
    letter-spacing: 1px
  }
  .h1 {
    font-size: 40px;
    margin-bottom: 30px;
  }
  .h2 {
    font-size: 34px;
    margin-bottom: 20px;
  }
  .h3 {
    font-size: 28px;
    margin-bottom: 15px;
  }
  .label {
    font-size: .90rem;
  }
  // media query font sizes font size sm/12 m/16 l/20
  .primary-text {
    font-weight: 300;
    letter-spacing: .2px;
    line-height: 28.8px;
    &--bold {
      font-weight: 400;
    }
    &--italic {
      font-style: italic;
    }
  }
  // Secondary
  // 2 pts smaller than Default across all breakpoints
  .link {
    &:hover {
      text-decoration: underline
    }
  }
  .subtitle {
    font-size: 1.4rem;
    &--italic {
      font-style: italic;
    }
  }
  .caption {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    &--xs {
      font-size: 14px;
    }
  }
`;

// media query example

// const Test = styled.div`
//   width: 100px;
//   height: 100px;
//   @media ${device.mobileL} {
//     background-color: blue;
//   }

//   @media ${device.laptop} {
//     background-color: green;
//   }

//   @media ${device.desktop} {
//     background-color: red;
//   }
// `;

export default GlobalStyles;
