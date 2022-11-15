export type Block = {
    element: 'ul' | 'li' | 'p' | 'h1' | 'h2';
    children: (Block | string)[];
  };
  
export type InputAreaProps = {
onChange: React.Dispatch<string>
}

export type OutputAreaProps = {
blocks: Block[]
}