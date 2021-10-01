import * as styled from 'styled-components'

export default styled.createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .landing-screen {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  #experience {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
