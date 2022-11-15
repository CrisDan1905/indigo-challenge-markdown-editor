import { Block } from "../types";

export const parseMarkdown = (state: Block[], markdown: string): Block[] => {
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