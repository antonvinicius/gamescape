import { ScreenContainer } from "@components/ScreenContainer";
import { Logo } from "./styles";
import { Input } from "@components/Input";
import { Spacer } from "@components/Spacer";
import { GamesList } from "./components/GamesList";

export function Games() {
  const games = ['Batman: Arhkam Asylum 2', 'spider-man 2', 'plus']

  return (
    <ScreenContainer>
      <Logo />
      <Spacer bottom={53} />
      <Input placeholder="Pesquise por um game..." />
      <Spacer bottom={20} />

      <GamesList
        games={games}
      />
    </ScreenContainer>
  )
}