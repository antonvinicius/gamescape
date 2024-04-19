import styled from "styled-components/native";
import { css } from "styled-components/native";

type Props = {
  weight: 'regular' | 'bold',
  center?: boolean
}

export const Label = styled.Text<Props>`
  font-family: ${props => props.weight === 'regular' ? props.theme.FONTS.REGULAR : props.theme.FONTS.BOLD};
  font-size: 14px;
  color: ${props => props.theme.COLORS.WHITE};
  ${props => props.center && css`
    text-align: center;
  `}
`