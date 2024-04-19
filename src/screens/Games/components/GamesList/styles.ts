import { Plus } from "phosphor-react-native";
import styled from "styled-components/native";


type GameProps = {
  isEmpty: boolean
}

export const Game = styled.TouchableOpacity<GameProps>`
  background-color: ${props => props.isEmpty ? props.theme.COLORS.GRAY_400 : props.theme.COLORS.PRIMARY};
  height: 119px; 
  width: 48.5%;
  border-radius: 6px;
  align-items: center;
  justify-content: center; 
  padding: 20px;
`

export const AddIcon = styled(Plus).attrs(props => ({
  color: props.theme.COLORS.WHITE,
  size: 32
}))``