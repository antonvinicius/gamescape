import { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  children: ReactNode
}

export function ScreenContainer({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  )
}