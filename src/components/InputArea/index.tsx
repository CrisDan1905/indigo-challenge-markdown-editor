import { BaseSyntheticEvent } from "react";
import { InputAreaProps } from "../../types";
import { TextArea } from "./styles";

export function InputArea({onChange}: InputAreaProps) {
  function getInputValue(e: BaseSyntheticEvent) {
    const textToParse = e.target.value
    onChange(textToParse)
  }
  
  return (<TextArea onChange={getInputValue} rows={5} />)
}