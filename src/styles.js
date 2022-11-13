import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *::before, *::after {
          box-sizing: inherit;
  }

  ul {
          list-style: none;
  }

  body {
          background: #fefefe;
          height: 100vh;
          margin: 0 auto;
          overscroll-behavior: none;
          width: 100%;
  }

  #app {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          overflow-x: hidden;
          min-height: 100vh;
          padding-bottom: 10px;
  }
`

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
`

export const TextArea = styled.textarea`
  width: 50%;
  height: 95vh;
  resize: none;
`

export const Aside = styled.aside`
  width: 50%;
  height: 95vh;

  & h1 {
    font-size: 1.8rem;
  }

  & h2 {
    font-size: 1.4rem;
  }

  & ul {
    list-style: square;
  }
`