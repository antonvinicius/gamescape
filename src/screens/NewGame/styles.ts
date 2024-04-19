import styled from "styled-components/native";

export const ChooseContainer = styled.View`
  flex-direction: row;
`

type ChooseWrapperProps = {
  isSelected: boolean
}

export const ChooserContainer = styled.View`
  flex: 1;
`

export const ChooserWrapper = styled.TouchableOpacity<ChooseWrapperProps>`
  background-color: ${props => props.isSelected ? props.theme.COLORS.PRIMARY : props.theme.COLORS.GRAY_600};
  border-radius: 6px; 
  align-items: center;
  justify-content: center;
  padding: 24px;
`