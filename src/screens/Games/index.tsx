import { ScreenContainer } from "@components/ScreenContainer";
import { Logo } from "./styles";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Spacer } from "@components/Spacer";

export function Games() {
  return (
    <ScreenContainer>
      <Logo />
      <Spacer bottom={53} />
      <Input placeholder="Pesquise por um game..." />
    </ScreenContainer>
  )
}