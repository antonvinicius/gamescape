import { Container } from "./styles";

type Props = {
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
}

export function Spacer({ bottom, top, left, right }: Props) {
  return (
    <Container
      bottom={bottom}
      top={top}
      left={left}
      right={right}
    />
  )
}