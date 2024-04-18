import styled from "styled-components/native";

type Props = {
  weight: 'regular' | 'bold'
}

export const Label = styled.Text<Props>`
  font-family: ${props => props.weight === 'regular' ? props.theme.FONTS.REGULAR : props.theme.FONTS.BOLD};
  font-size: 14px;
  color: ${props => props.theme.COLORS.WHITE};
`