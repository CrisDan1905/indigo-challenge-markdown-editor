import React, { ReactElement } from "react";
import { Block } from "../types";

export const buildElement = ({element, children}: Block, i: number): ReactElement => {
  const builtChildren = children.map((child, childIndex) => {
      if (typeof child === 'string') {
      return child
      } else {
      return (buildElement(child, childIndex))
      }
  })

  return React.createElement(element, {key: i}, [...builtChildren])
}