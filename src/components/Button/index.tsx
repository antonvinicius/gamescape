import { ReactNode } from "react"
import { Container } from "./styles"
import { TextDisplay } from "@components/TextDisplay"
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  children: ReactNode
}

export function Button({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TextDisplay center weight='bold'>{children}</TextDisplay>
    </Container>
  )
}