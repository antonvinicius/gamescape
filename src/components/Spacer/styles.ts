import styled, { css } from "styled-components/native";

type Props = {
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
  flex?: number;
}

export const Container = styled.View<Props>`
  ${props => props.bottom && css`
    margin-bottom: ${props.bottom}px;
  `}

  ${props => props.top && css`
    margin-top: ${props.top}px;
  `}

  ${props => props.left && css`
    margin-left: ${props.left}px;
  `}

  ${props => props.right && css`
    margin-right: ${props.right}px;
  `}

  ${props => props.flex && css`
    flex: ${props.flex}
  `}
`