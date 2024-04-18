import { ReactNode } from "react";
import { TextProps } from "react-native";
import { Label } from "./styles";

type Props = TextProps & {
  children: ReactNode,
  weight?: 'regular' | 'bold'
}

export function TextDisplay({ children, weight = 'regular', ...rest }: Props) {
  return <Label weight={weight}>{children}</Label>
}