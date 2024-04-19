import { Container } from "./styles";

type Props = {
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
  flex?: number;
}

export function Spacer({ bottom, top, left, right, flex }: Props) {
  return (
    <Container
      bottom={bottom}
      top={top}
      left={left}
      right={right}
      flex={flex}
    />
  )
}