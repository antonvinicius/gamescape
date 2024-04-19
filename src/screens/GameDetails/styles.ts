import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.COLORS.GRAY_800}; 
`

export const HeaderContainer = styled(SafeAreaView)`
  padding: 68px 32px;
  height: 354px;
  background-color: ${props => props.theme.COLORS.GRAY_600};
`

export const Title = styled.Text`
  font-family: ${props => props.theme.FONTS.BOLD};
  font-size: 24px;
  color: ${props => props.theme.COLORS.WHITE};
`

export const Border = styled.View`
  width: 30%;
  background-color: ${props => props.theme.COLORS.PRIMARY};
  height: 4px;
`

export const MainSection = styled.View`
  flex: 1;
  padding: 30px;
  justify-content: center;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const RowItem = styled.View`
  flex: 1;
`

export const LastRow = styled.View`
  
  justify-content: center;
  align-items: center;
`