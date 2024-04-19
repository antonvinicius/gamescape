import { TouchableOpacity } from "react-native";
import { BackIcon, Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const navigation = useNavigation()

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Games')}>
        <BackIcon />
      </TouchableOpacity>
      <Logo />
    </Container>
  )
}