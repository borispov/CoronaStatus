import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html, body {
      position: relative;
      min-height: 100%;
      max-width: 100%;
      font-size: 62.5%;
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.color};
      font-family: ${props => props.theme.fontFamily};
      direction: ${props => props.isHeb ? 'rtl' : ''};
  }

  .Select {
    color: black !important;
    font-size: 17px;
    font-family: 'Rubik';
    z-index: 999999;
  }


  .div.span.h3 {
    font-family: 'Rubik';
  }

  h1 {
    font-family: 'Rubik';
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-family: 'Rubik';
    font-size: 1.75rem;
  }

  .loader-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #ededed;
  }

  .loader {
    max-width: 15rem;
    width: 100%;
    height: auto;
    stroke-linecap: round;
  }

  circle {
    fill: none;
    stroke-width: 3.5;
    animation-name: preloader;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: 170px 170px;
    will-change: transform;

    &:nth-of-type(1) {
      stroke-dasharray: 550px;
    }

    &:nth-of-type(2) {
      stroke-dasharray: 500px;
    }

    &:nth-of-type(3) {
      stroke-dasharray: 450px;
    }

    &:nth-of-type(4) {
      stroke-dasharray: 300px;
    }

    @for $i from 1 through 4 {
      &:nth-of-type(#{$i}) {
        animation-delay: -#{$i * 0.15}s;
      }
    }
  }

  @keyframes preloader {
    50% {
      transform: rotate(360deg);
    }
  }



`


export default GlobalStyle
