import styled from "styled-components/native";

export const Container = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.theme.COLORS.GRAY_50
}))`
  padding: 12px;
  font-family: ${props => props.theme.FONTS.REGULAR};
  font-size: 14px; 
  background-color: ${props => props.theme.COLORS.GRAY_600};
  border-radius: 6px;
  color: ${props => props.theme.COLORS.WHITE};
`