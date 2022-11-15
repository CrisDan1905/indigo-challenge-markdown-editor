import React from "react";
import { InputArea } from "./components/InputArea";
import { OutputArea } from "./components/OutputArea";
import { Container } from "./containers/container/styles";
import { parseMarkdown } from "./utils/parseMarkdown";

function App() {
  const [parsedMarkdown, setParsedMarkdown] = React.useReducer(parseMarkdown, [])

  function onInputChange(markdown: string) {
    setParsedMarkdown(markdown)
  }

  return (
    <>
      <Container>
        <InputArea onChange={onInputChange}/>
        <OutputArea blocks={parsedMarkdown}></OutputArea>
      </Container>
    </>
  );
}

export default App;
