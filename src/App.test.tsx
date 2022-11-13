import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

const inputValue = async (input: string) => {
  const textarea = screen.getByRole('textbox');
  await userEvent.type(textarea, input)
}

const getOutputElement = (text: string) => {
  const outputSection = screen.getByTitle('output')
  const outputElement = within(outputSection).getByText(text)

  return outputElement
}

test('renders text input', () => {
  render(<App />);
  const textarea = screen.getByRole('textbox');
  expect(textarea).toBeInTheDocument();
});

test('a normal input renders as a p in the output box', async () => {
  render(<App />);

  await inputValue('testing value')
  const outputElement = getOutputElement('testing value')

  expect(outputElement).toBeInTheDocument()
  expect(outputElement.tagName).toEqual('P')
})

test('an input starting by # renders as a h1 in the output box', async () => {
  render(<App />);

  await inputValue('# testing value')
  const outputElement = getOutputElement('testing value')

  expect(outputElement).toBeInTheDocument()
  expect(outputElement.tagName).toEqual('H1')
})

test('an input starting by ## renders as a h2 in the output box', async () => {
  render(<App />);

  await inputValue( '## testing value')
  const outputElement = getOutputElement('testing value')

  expect(outputElement).toBeInTheDocument()
  expect(outputElement.tagName).toEqual('H2')
})

describe('lists', () => {
  it('an input starting by * renders as a li in the output box', async () => {
    render(<App />);
  
    await inputValue('* testing value')
    const outputElement = getOutputElement('testing value')
  
    expect(outputElement).toBeInTheDocument()
    expect(outputElement.tagName).toEqual('LI')
  })

  test('an input starting by - renders as a li in the output box', async () => {
    render(<App />);
  
    await inputValue('- testing value')
    const outputElement = getOutputElement('testing value')
  
    expect(outputElement).toBeInTheDocument()
    expect(outputElement.tagName).toEqual('LI')
  })
})

test('separates in different blocks when an empty new line is stroke between inputs', async () => {
  render(<App />);
  
  await inputValue('testing value');
  await inputValue('{enter}');
  await inputValue('{enter}');
  await inputValue('# second testing value')
  const outputElement = getOutputElement('testing value')
  const secondOutputElement = getOutputElement('second testing value')

  expect(outputElement).toBeInTheDocument()
  expect(outputElement.tagName).toEqual('P')
  expect(secondOutputElement.tagName).toEqual('H1')
})

