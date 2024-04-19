import { ReactNode } from "react";
import { TextProps } from "react-native";
import { Label } from "./styles";

type Props = TextProps & {
  children: ReactNode,
  weight?: 'regular' | 'bold',
  center?: boolean
}

export function TextDisplay({ children, weight = 'regular', center = false, ...rest }: Props) {
  return <Label weight={weight} center={center} {...rest}>{children}</Label>
}