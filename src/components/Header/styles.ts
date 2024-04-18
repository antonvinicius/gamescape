import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

import logo from '@assets/logo_controller.png'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const BackIcon = styled(CaretLeft).attrs(props => ({
  size: 32,
  color: props.theme.COLORS.PRIMARY
}))
  ``

export const Logo = styled.Image.attrs({
  source: logo
})``