import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html, body {
      position: relative;
      min-height: 100%;
      max-width: 100%;
      // font-size: 62.5%;
      font-size: 16px !default;
      background-color: ${props => props.theme.bgColor};
      color: ${props => props.theme.text.primary};
      font-family: ${props => props.theme.fontFamily};
      direction: ${props => props.isHeb && 'rtl' || ''};
  }

  .react-select-container {
    width: 350px;
    margin: 0 auto;
    color: black !important;
    font-size: 1rem;
    font-family: 'Rubik, Arial';
    z-index: 999999;
  }

  .react-select__control {
    letter-spacing: 0.5px;
    text-transform: capitalize;
    padding: 0 .5em;
    box-shadow: inset 0 2px 4px 0px hsla(0, 0%, 0%, 0.08);
  }

  .react-select__menu-list {
    background: ${props => props.theme.primaryColor + '14'};
    font-family: Quicksand;
    > * {
      &:hover {
        transition: all .3s ease-in-out;
        background: ${props => props.theme.primaryVariant + '66'} !important;
        color: white;
      }
    }
  }

  .react-select__control--is-focused {
    background: ${props => props.theme.hoverColor} !important;
  }

  .div.span.h3 {
    font-family: 'Rubik';
  }

  h1 {
    font-family: 'Rubik';
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 500;
    line-height: 1.2;
  }
  h3 {
    font-family: 'Rubik';
    font-size: 1.25rem;
  }

  .loader-container {
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #ededed;
    transition: all 0.125s ease-in-out;
  }

  .loader {
    max-width: 10em;
    transition: all 0.125s ease-in-out;
    margin: 0 auto;
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

  img {
    vertical-align: middle;
  }

  @keyframes preloader {
    50% {
      transform: rotate(360deg);
    }
  }



`


export default GlobalStyle
