import styled from 'styled-components'

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

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