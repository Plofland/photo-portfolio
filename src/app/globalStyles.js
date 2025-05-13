import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding-right: 0;
    box-sizing: border-box;
    font-family: 'Garamond', serif;;
    background-image: url('/photos/brickBG.jpg');
    background-size: cover;
    background-position: center;  
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
  }
`;

export default GlobalStyles;
