import { TouchableOpacity } from "react-native";
import { BackIcon, Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <TouchableOpacity>
        <BackIcon />
      </TouchableOpacity>
      <Logo />
    </Container>
  )
}