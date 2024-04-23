import { TextInput, TextInputProps } from "react-native";
import { Container } from "./styles";
import { LegacyRef } from "react";

type Props = TextInputProps & {
  reference?: LegacyRef<TextInput>
}

export function Input({ reference, ...rest }: Props) {
  return (
    <Container ref={reference} {...rest} />
  )
}