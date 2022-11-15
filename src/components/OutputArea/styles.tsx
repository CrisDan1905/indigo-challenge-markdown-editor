import styled from 'styled-components'

export const Aside = styled.aside`
  width: 50%;
  height: 94vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: #269fba3b;
  padding: 0 2rem;
  border-radius: 0.4rem;
  overflow-y: scroll;
  overflow-wrap: break-word;

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