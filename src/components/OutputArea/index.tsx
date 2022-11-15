import { OutputAreaProps } from "../../types";
import { buildElement } from "../../utils/buildElement";
import { Aside } from "./styles";

export function OutputArea({blocks = []}: OutputAreaProps) {
  return <Aside title="output">
    {blocks.map(buildElement)}
  </Aside>
}