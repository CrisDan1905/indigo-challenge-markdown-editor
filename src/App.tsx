import React, { BaseSyntheticEvent, ReactElement } from "react";
import { Aside, Container, TextArea, GlobalStyle } from "./styles";

type Block = {
  element: 'ul' | 'li' | 'p' | 'h1' | 'h2';
  children: (Block | string)[];
};

type InputAreaProps = {
  onChange: React.Dispatch<string>
}

type OutputAreaProps = {
  blocks: Block[]
}

function buildElement({element, children}: Block, i: number): ReactElement {
  const builtChildren = children.map((child, childIndex) => {
    if (typeof child === 'string') {
      return child
    } else {
      return (buildElement(child, childIndex))
    }
  })
  
  return React.createElement(element, {key: i}, [...builtChildren])
}

const parseMarkdown = (state: Block[], markdown: string): Block[] => {
  const splitedMarkdown = markdown.split(/\r?\n\n+/)

  const blocks =  splitedMarkdown.map(stringToParse => {
    if (stringToParse.startsWith('## ')) {
      return {
        element: 'h2',
        children: [stringToParse.replace('## ', '')]
      }
    } else if (stringToParse.startsWith('# ')) {
      return {
        element: 'h1',
        children: [stringToParse.replace('# ', '')]
      }
    } else if (stringToParse.match(/[*|-] /)) {
      return {
        element: 'ul',
        children: stringToParse.split(/[*|-] /).slice(1).map(string => ({element: 'li', children: [string]}))
      }
    }
      return {
        element: 'p',
        children: [stringToParse]
      }
  }) as Block[]

  return blocks
};

function App() {
  const [parsedMarkdown, setParsedMarkdown] = React.useReducer(parseMarkdown, [])

  function onInputChange(markdown: string) {
    setParsedMarkdown(markdown)
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <InputArea onChange={onInputChange}/>
        <OutputArea blocks={parsedMarkdown}></OutputArea>
      </Container>
    </>
  );
}

function InputArea({onChange}: InputAreaProps) {
  function getInputValue(e: BaseSyntheticEvent) {
    const textToParse = e.target.value
    onChange(textToParse)
  }
  
  return (<TextArea onChange={getInputValue} rows={5} />)
}

function OutputArea({blocks = []}: OutputAreaProps) {
  return <Aside title="output">
    {blocks.map(buildElement)}
  </Aside>
}

export default App;
