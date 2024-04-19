import { ReactNode } from "react"
import { Container } from "./styles"
import { TextDisplay } from "@components/TextDisplay"

type Props = {
  children: ReactNode
}

export function Button({ children }: Props) {
  return (
    <Container>
      <TextDisplay center weight='bold'>{children}</TextDisplay>
    </Container>
  )
}